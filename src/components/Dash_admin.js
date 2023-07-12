import React, {useEffect, useState} from "react";
import $ from 'jquery'
import { Bar } from 'react-chartjs-2';
import { registerables, Chart as ChartJS } from 'chart.js';

import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/fonts/circular-std/style.css';
import '../assets/libs/css/style.css';
import '../assets/vendor/fonts/fontawesome/css/fontawesome-all.css';
import '../assets/vendor/charts/chartist-bundle/chartist.css';
import '../assets/vendor/charts/morris-bundle/morris.css';
import '../assets/vendor/fonts/material-design-iconic-font/css/materialdesignicons.min.css';
import '../assets/vendor/charts/c3charts/c3.css';
import '../assets/vendor/fonts/flag-icon-css/flag-icon.min.css';


const DashAdmin = () => {
    ChartJS.register(...registerables);
    const [thisMonthPrice, setThisMonthPrice] = useState(null);
    const [expectedPrice, setExpectedPrice] = useState([]);
    const [barDailyLabels, setBarDailyLabels] = useState([]);
    const [barMonthLabels, setBarMonthLabels] = useState([]);
    const [resourceData, setResourceData] = useState([]);

    // 일간/월간 그래프 탭 script
    $('ul.nav.nav-tabs li').click(function () {
        var tab_id = $(this).find('a').attr('data-tab');

        $('ul.nav.nav-tabs li').removeClass('active');
        $('.tab-pane.fade').removeClass('show active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('show active');
    });

    useEffect(() => {
        // 일간 DB 데이터 불러오기
        fetchDailyData();
    }, []);

    useEffect(()=> {
        // 월간 DB 데이터 불러오기
        fetchMonthlyData();
    }, []);

    useEffect(() => {
        // AWS Resource 데이터 불러오기
        fetchResourceData();
    }, []);

    const fetchDailyData = async() => {
        const response = await fetch('http://dash.tteogip.com/pricing/today/');
        const result = await response.json();

        // 일주일 치 날짜&요금 저장
        const weekLabels = result.slice(-7).map((item) => ({
            date : item['date'].slice(4),
            price : item['price'],
        }));
        setBarDailyLabels(weekLabels);

        // 이번 달 요금 계산
            // 이번 달에 해당하는 날짜, 요금 추출
        const monthLabels = result.map((item) => {
            const date = item['date'].slice(4,6);
            if (date === result[result.length-1]['date'].slice(4,6)) {
                const price = item['price'];
                return {
                    date: date,
                    price: price,
                };
            }
            return null;
        }).filter(item => item !== null);
            // 요금 더하기
        const sumThisMonth = monthLabels.map((item) => item['price']).reduce(function add(sum, currValue) {
            return sum + currValue;
        })
        setThisMonthPrice(sumThisMonth);

    }

    const fetchMonthlyData = async() => {
        const response = await fetch('http://dash.tteogip.com/pricing/month/');
        const result = await response.json();

        // 이번달 예상 요금
        const expectedLow = parseInt(result[result.length-1]['price'] * 0.9)
        const expectedHigh = parseInt(result[result.length-1]['price'] * 1.1)
        const expectedPrice = [expectedLow, expectedHigh];
        setExpectedPrice(expectedPrice);

        // 월간 비용 추출
        const monthLabels = result.map((item) => {
            const year = item['month'].slice(0,4);
            if (year === result[result.length-1]['month'].slice(0,4)) {
                const month = item['month'].slice(4,6)
                const price = item['price'];
                return {
                    month: month,
                    price: price,
                };
            }
            return null;
        }).filter(item => item !== null);
        const arr = new Array(12).fill(0);
        for (let i = 0; i < monthLabels.length; i++) {
            arr[i] = monthLabels[i]['price'];
        }
        setBarMonthLabels(arr);
    }

    const fetchResourceData = async() => {
        const response = await fetch('http://dash.tteogip.com/pricing/resource/');
        const result = await response.json();

        // 비용 내림차순 정렬
        const resourceCost = {
            EC2: result[result.length-1]['ec2Price'],
            EBS: result[result.length-1]['ebsPrice'],
            EKS: result[result.length-1]['eksPrice'],
            ES: result[result.length-1]['esPrice'],
            RDS: result[result.length-1]['rdsPrice']
        };
        const sortedResource = Object.fromEntries(
            Object.entries(resourceCost).sort(([, a], [, b]) => b - a)
        );
        setResourceData(Object.entries(sortedResource).map(([key, value], index) => (
            <tr key={key}>
                <td>{index + 1}</td>
                <td>{key}</td>
                <td>{value}</td>
            </tr>
        )));
    }

    // 일간 비용 Bar Graph
    const barData = {
        labels : barDailyLabels.map((item) => item['date']),
        datasets:[{
            label : 'Week',
            data : barDailyLabels.map((item) => item['price']),
            backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
            ],
        }],
    };

    const barOptions = {};

    // 월간 비용 Bar Graph
    const monthBarData = {
        labels : [1,2,3,4,5,6,7,8,9,10,11,12],
        datasets:[{
            label : 'Month',
            data : barMonthLabels,
            backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
            ],
        }],
    };


    return (
        <div className="dashboard-main-wrapper">
            {/* navbar */}
            <div className="dashboard-header">
                <nav className="navbar navbar-expand-lg bg-white fixed-top">
                    <a className="navbar-brand" href="/dash_admin">TTeog-Ip</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto navbar-right-top">
                            <li className="nav-item dropdown nav-user">
                                <a className="dropdown-item" href="/logout"><i className="fas fa-power-off mr-2"></i>Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* end navbar */}

            {/* left sidebar */}
            <div className="nav-left-sidebar sidebar-dark">
                <div className="menu-list">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="d-xl-none d-lg-none" href="#">Dashboard</a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-divider">
                                    Dashboard
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dash_admin"><i
                                        className="fas fa-fw fa-chart-pie"></i>Administrator</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            {/* end left sidebar */}

            {/* wrapper */}
            <div className="dashboard-wrapper">
                <div className="container-fluid dashboard-content">
                    {/* page header */}
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="page-header">
                                <h3 className="mb-2">Administrator Dashboard</h3>
                                <div className="page-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="/dash_admin"
                                                                               className="breadcrumb-link">Dashboard</a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">Administrator
                                                Dashboard
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end page header */}

                    <p>*실제 비용과의 차이: ELB/ECR/S3/NAT Gateway 로 오고 간 데이터 이동량 GB 에 청구되는 비용</p>

                    {/* 이번달 요금 */}
                    <div className="row">
                        {/* 이번달 실시간 요금 */}
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="card border-3 border-top border-top-primary">
                                <div className="card-body">
                                    <h5 className="text-muted">금월 사용금액</h5>
                                    <div className="metric-value d-inline-block">
                                        <h1 className="mb-1">$ {thisMonthPrice}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end 이번달 실시간 요금 */}

                        {/* 이번달 예상 요금 */}
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="card border-3 border-top border-top-primary">
                                <div className="card-body">
                                    <h5 className="text-muted">예상 사용금액</h5>
                                    <div className="metric-value d-inline-block">
                                        <h1 className="mb-1">$ {expectedPrice[0]} ~ $ {expectedPrice[1]}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end 이번달 예상 요금 */}
                    </div>

                    {/* 기간별 요금 */}
                    <div className="row">
                        {/* basic tabs */}
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                            <div className="section-block">
                                <h5 className="section-title">기간별 요금</h5>
                                <p>일간 비용 : 전날을 기준으로 일주일 간 비용 산출 <br/>
                                월간 비용 : 이번 년도 12달 간 비용 산출</p>
                            </div>
                            <div className="tab-regular">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link" data-tab="home" data-toggle="tab"
                                           role="tab" aria-controls="home" aria-selected="true">일간 비용</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-tab="profile" data-toggle="tab"
                                           role="tab" aria-controls="profile" aria-selected="false"
                                            >월간 비용</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent" style={{width:'1000px'}}>
                                    <div className="tab-pane fade show active" id="home" role="tabpanel"
                                         aria-labelledby="home-tab">
                                        <Bar data={barData}
                                             width={20}
                                             height={10}
                                             options={barOptions}
                                             />
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel"
                                         aria-labelledby="profile-tab">
                                        <Bar data={monthBarData}
                                             width={20}
                                             height={10}
                                             options={barOptions}
                                             />
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* end basic tabs */}
                    </div>

                    {/* 리소스별 요금 */}
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                            <div className="section-block">
                                <h5 className="section-title">리소스별 요금</h5>
                                <p>*전날 기준</p>
                            </div>

                            <div className="card" style={{width: '800px'}}>
                                <h5 className="card-header">AWS</h5>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="bg-light">
                                            <tr className="border-0">
                                                <th className="border-0">#</th>
                                                <th className="border-0">Resource Name</th>
                                                <th className="border-0">Price</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {resourceData}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                {/* footer */}
                <div className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                Copyright © 2018 Concept. All rights reserved. Dashboard by <a
                                href="https://colorlib.com/wp/">Colorlib</a>.
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="text-md-right footer-links d-none d-sm-block">
                                    <a href="javascript: void(0);">About</a>
                                    <a href="javascript: void(0);">Support</a>
                                    <a href="javascript: void(0);">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end footer */}
            </div>
        </div>
    );
};

export default DashAdmin;
