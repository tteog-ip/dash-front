import React from "react";

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

                    {/* 이번달 요금 */}
                    <div className="row">
                        {/* 이번달 실시간 요금 */}
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="card border-3 border-top border-top-primary">
                                <div className="card-body">
                                    <h5 className="text-muted">이번달 실시간 요금</h5>
                                    <div className="metric-value d-inline-block">
                                        <h1 className="mb-1">$12099</h1>
                                    </div>
                                    <div
                                        className="metric-label d-inline-block float-right text-success font-weight-bold">
                                        <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i
                                            className="fa fa-fw fa-arrow-up"></i></span><span
                                        className="ml-1">5.86%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end 이번달 실시간 요금 */}

                        {/* 이번달 예상 요금 */}
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="card border-3 border-top border-top-primary">
                                <div className="card-body">
                                    <h5 className="text-muted">이번달 예상 요금</h5>
                                    <div className="metric-value d-inline-block">
                                        <h1 className="mb-1">$1245</h1>
                                    </div>
                                    <div
                                        className="metric-label d-inline-block float-right text-success font-weight-bold">
                                        <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i
                                            className="fa fa-fw fa-arrow-up"></i></span><span
                                        className="ml-1">10%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end 이번달 예상 요금 */}

                        {/* visitor */}
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="card border-3 border-top border-top-primary">
                                <div className="card-body">
                                    <h5 className="text-muted">Visitor</h5>
                                    <div className="metric-value d-inline-block">
                                        <h1 className="mb-1">13000</h1>
                                    </div>
                                    <div
                                        className="metric-label d-inline-block float-right text-success font-weight-bold">
                                        <span className="icon-circle-small icon-box-xs text-success bg-success-light"><i
                                            className="fa fa-fw fa-arrow-up"></i></span><span className="ml-1">5%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end visitor */}

                        {/* total order */}
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="card border-3 border-top border-top-primary">
                                <div className="card-body">
                                    <h5 className="text-muted">Total Orders</h5>
                                    <div className="metric-value d-inline-block">
                                        <h1 className="mb-1">1340</h1>
                                    </div>
                                    <div
                                        className="metric-label d-inline-block float-right text-danger font-weight-bold">
                                        <span
                                            className="icon-circle-small icon-box-xs text-danger bg-danger-light bg-danger-light "><i
                                            className="fa fa-fw fa-arrow-down"></i></span><span
                                        className="ml-1">4%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end total order*/}
                    </div>

                    {/* 기간별 요금 */}
                    <div className="row">
                        {/* basic tabs */}
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                            <div className="section-block">
                                <h5 className="section-title">기간별 요금</h5>
                                <p>비용의 변화를 확인해보세용^^</p>
                            </div>
                            <div className="tab-regular">
                                <ul className="nav nav-tabs " id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home"
                                           role="tab" aria-controls="home" aria-selected="true">시간</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile"
                                           role="tab" aria-controls="profile" aria-selected="false">일</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact"
                                           role="tab" aria-controls="contact" aria-selected="false">월</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel"
                                         aria-labelledby="home-tab">
                                        <div className="card">
                                            <h5 className="card-header">Area Chart</h5>
                                            <div className="card-body">
                                                <div id="c3chart_area"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel"
                                         aria-labelledby="profile-tab">

                                    </div>
                                    <div className="tab-pane fade" id="contact" role="tabpanel"
                                         aria-labelledby="contact-tab">

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
                                <p>리소스별 요금을 확인해보세용^^</p>
                            </div>

                            {/* outline basic tabs */}
                            <div className="tab-regular">
                                <ul className="nav nav-tabs" id="myTab2" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="tab-outline-one" data-toggle="tab"
                                           href="#outline-one" role="tab" aria-controls="home"
                                           aria-selected="true">시간</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab-outline-two" data-toggle="tab"
                                           href="#outline-two" role="tab" aria-controls="profile"
                                           aria-selected="false">일</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="tab-outline-three" data-toggle="tab"
                                           href="#outline-three" role="tab" aria-controls="contact"
                                           aria-selected="false">월</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent2">
                                    <div className="tab-pane fade show active" id="outline-one" role="tabpanel"
                                         aria-labelledby="tab-outline-one">
                                        <div className="card">
                                            <h5 className="card-header">Recent Orders</h5>
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
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Product #1</td>
                                                            <td>$80.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Product #2</td>
                                                            <td>$50.00</td>
                                                        </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="outline-two" role="tabpanel"
                                         aria-labelledby="tab-outline-two">

                                    </div>
                                    <div className="tab-pane fade" id="outline-three" role="tabpanel"
                                         aria-labelledby="tab-outline-three">

                                    </div>
                                </div>
                            </div>
                            {/* end outline basic tabs */}


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