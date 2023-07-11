import React from 'react';
import ingress_logs from "../assets/images/Ingress_logs.png"
import ingress_log2 from "../assets/images/Ingress_log2.png"
import ingress_log3 from "../assets/images/Ingress_log3.png"
class DashDev extends React.Component {
  render() {
    return (
        <div className="dashboard-main-wrapper">
            {/* navbar */}
            <div className="dashboard-header">
                <nav className="navbar navbar-expand-lg bg-white fixed-top">
                    <a className="navbar-brand" href="/dash_dev">TTeog-Ip</a>
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
                        <a className="d-xl-none d-lg-none" href="/dash_dev">Dashboard</a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-divider">
                                    Dashboard
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dash_dev"><i
                                        className="fas fa-fw fa-chart-pie"></i>Developer</a>
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
                                <h3 className="mb-2">Developer Dashboard</h3>
                                <div className="page-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="/dash_dev"
                                                                               className="breadcrumb-link">Dashboard</a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">Developer
                                                Dashboard
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end page header */}
                </div>

                {/* start kibana dashboard */}
                <a href="https://search-efk-health-oalyovqxak4gh755rn4oddc5ou.ap-northeast-2.es.amazonaws.com/_plugin/kibana/app/dashboards?security_tenant=global#/view/1b8ad5e0-1ca1-11ee-a8bb-416788f00b3e?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),query:(language:kuery,query:''),timeRestore:!f,title:'0707%20dashboard%20complete',viewMode:view)"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    Kibana Dashboard 바로가기 링크<br/><br/><br/>
                </a>
                <img src={ingress_logs} width="1500px"/>
                <img src={ingress_log2} width="1500px"/>
                <img src={ingress_log3} width="1500px"/>
                {/*
                <iframe src="https://search-efk-health-oalyovqxak4gh755rn4oddc5ou.ap-northeast-2.es.amazonaws.com/_plugin/kibana/app/dashboards?security_tenant=global#/view/1b8ad5e0-1ca1-11ee-a8bb-416788f00b3e?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),query:(language:kuery,query:''),timeRestore:!f,title:'0707%20dashboard%20complete',viewMode:view)"
                        frameborder="0"
                        height="1000px"
                        width="100%"
                        ></iframe> */}
                {/* end kibana dashboard */}

                <div className="footer">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        Copyright © 2018 Concept. All rights reserved. Dashboard by <a href="https://colorlib.com/wp/">Colorlib</a>.
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
              </div>
            </div>
    )
  };
};

export default DashDev;
