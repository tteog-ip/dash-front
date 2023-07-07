import React from "react";

class DashOps extends React.Component {
  render() {
    return (
      <div className="dashboard-main-wrapper">
        {/* navbar */}
        <div className="dashboard-header">
          <nav className="navbar navbar-expand-lg bg-white fixed-top">
            <a className="navbar-brand" href="/dash_ops">
              TTeog-Ip
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto navbar-right-top">
                <li className="nav-item dropdown nav-user">
                  <a className="dropdown-item" href="/logout">
                    <i className="fas fa-power-off mr-2"></i>Logout
                  </a>
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
              <a className="d-xl-none d-lg-none" href="#">
                Dashboard
              </a>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav flex-column">
                  <li className="nav-divider">Dashboard</li>
                  <li className="nav-item">
                    <a className="nav-link" href="/dash_ops">
                      <i className="fas fa-fw fa-chart-pie"></i>Operator
                    </a>
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
                  <h3 className="mb-2">Operator Dashboard</h3>
                  <div className="page-breadcrumb">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="/dash_ops" className="breadcrumb-link">
                            Dashboard
                          </a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Operator Dashboard
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            {/* end page header */}
          </div>

          <div>
            <div className="dash">
              <p className="toggle1">클러스터 요약</p>
              <iframe
                className="panel1"
                src="http://addaf4a5ba7084490adcd388a4927520-211657959.ap-northeast-2.elb.amazonaws.com/d-solo/4b545447f/1-kubernetes-all-in-one-cluster-monitoring-kr-v1-26-0?orgId=1&refresh=30s&theme=light&panelId=158"
                frameborder="0"
              ></iframe>
              <iframe
                className="panel2"
                src="http://addaf4a5ba7084490adcd388a4927520-211657959.ap-northeast-2.elb.amazonaws.com/d-solo/4b545447f/1-kubernetes-all-in-one-cluster-monitoring-kr-v1-26-0?orgId=1&refresh=30s&theme=light&panelId=131"
                frameborder="0"
              ></iframe>
              <iframe
                className="panel3"
                src="http://addaf4a5ba7084490adcd388a4927520-211657959.ap-northeast-2.elb.amazonaws.com/d-solo/4b545447f/1-kubernetes-all-in-one-cluster-monitoring-kr-v1-26-0?orgId=1&refresh=30s&theme=light&panelId=159"
                frameborder="0"
              ></iframe>
              <iframe
                className="panel4"
                src="http://addaf4a5ba7084490adcd388a4927520-211657959.ap-northeast-2.elb.amazonaws.com/d-solo/4b545447f/1-kubernetes-all-in-one-cluster-monitoring-kr-v1-26-0?orgId=1&refresh=30s&theme=light&panelId=160"
                frameborder="0"
              ></iframe>
              <iframe
                className="panel5"
                src="http://addaf4a5ba7084490adcd388a4927520-211657959.ap-northeast-2.elb.amazonaws.com/d-solo/4b545447f/1-kubernetes-all-in-one-cluster-monitoring-kr-v1-26-0?orgId=1&refresh=30s&theme=light&panelId=64"
                frameborder="0"
              ></iframe>
            </div>
            <div className="dash">
              <p className="toggle2">전체 클러스터</p>
              <iframe
                className="panel6"
                src="http://addaf4a5ba7084490adcd388a4927520-211657959.ap-northeast-2.elb.amazonaws.com/d-solo/4b545447f/1-kubernetes-all-in-one-cluster-monitoring-kr-v1-26-0?orgId=1&refresh=30s&theme=light&panelId=35"
                frameborder="0"
              ></iframe>
              <iframe
                className="panel7"
                src="http://addaf4a5ba7084490adcd388a4927520-211657959.ap-northeast-2.elb.amazonaws.com/d-solo/4b545447f/1-kubernetes-all-in-one-cluster-monitoring-kr-v1-26-0?orgId=1&refresh=30s&theme=light&panelId=33"
                frameborder="0"
              ></iframe>
              <iframe
                className="panel8"
                src="http://addaf4a5ba7084490adcd388a4927520-211657959.ap-northeast-2.elb.amazonaws.com/d-solo/4b545447f/1-kubernetes-all-in-one-cluster-monitoring-kr-v1-26-0?orgId=1&refresh=30s&theme=light&panelId=133"
                frameborder="0"
              ></iframe>
              <iframe
                className="panel9"
                src="http://addaf4a5ba7084490adcd388a4927520-211657959.ap-northeast-2.elb.amazonaws.com/d-solo/4b545447f/1-kubernetes-all-in-one-cluster-monitoring-kr-v1-26-0?orgId=1&refresh=30s&theme=light&panelId=164"
                frameborder="0"
              ></iframe>
            </div>
            <div className="dash">
              <p className="toggle3">노드1 (10.0.1.106)</p>
              <iframe
                className="panel10"
                src="http://addaf4a5ba7084490adcd388a4927520-211657959.ap-northeast-2.elb.amazonaws.com/d-solo/4b545447f/1-kubernetes-all-in-one-cluster-monitoring-kr-v1-26-0?orgId=1&refresh=30s&var-node=ip-10-0-1-106.ap-northeast-2.compute.internal&var-duration=5m&var-instance=10.0.1.106%3A9100&theme=light&panelId=146"
                frameborder="0"
              ></iframe>
              <iframe
                className="panel11"
                src="http://addaf4a5ba7084490adcd388a4927520-211657959.ap-northeast-2.elb.amazonaws.com/d-solo/4b545447f/1-kubernetes-all-in-one-cluster-monitoring-kr-v1-26-0?orgId=1&refresh=30s&var-node=ip-10-0-1-106.ap-northeast-2.compute.internal&var-duration=5m&var-instance=10.0.1.106%3A9100&theme=light&panelId=154"
                frameborder="0"
              ></iframe>
            </div>
            <div className="dash">
              <p className="toggle4">노드2 (10.0.2.4)</p>
              <iframe
                className="panel12"
                src="http://addaf4a5ba7084490adcd388a4927520-211657959.ap-northeast-2.elb.amazonaws.com/d-solo/4b545447f/1-kubernetes-all-in-one-cluster-monitoring-kr-v1-26-0?orgId=1&refresh=30s&var-node=ip-10-0-2-4.ap-northeast-2.compute.internal&var-duration=5m&var-instance=10.0.2.4%3A9100&theme=light&panelId=146"
                frameborder="0"
              ></iframe>
              <iframe
                className="panel13"
                src="http://addaf4a5ba7084490adcd388a4927520-211657959.ap-northeast-2.elb.amazonaws.com/d-solo/4b545447f/1-kubernetes-all-in-one-cluster-monitoring-kr-v1-26-0?orgId=1&refresh=30s&var-node=ip-10-0-2-4.ap-northeast-2.compute.internal&var-duration=5m&var-instance=10.0.2.4%3A9100&theme=light&panelId=154"
                frameborder="0"
              ></iframe>
            </div>
            <div className="dash">
              <p className="toggle5">노드3 (10.0.3.186)</p>
              <iframe
                className="panel14"
                src="http://addaf4a5ba7084490adcd388a4927520-211657959.ap-northeast-2.elb.amazonaws.com/d-solo/4b545447f/1-kubernetes-all-in-one-cluster-monitoring-kr-v1-26-0?orgId=1&refresh=30s&var-node=ip-10-0-3-186.ap-northeast-2.compute.internal&var-duration=5m&var-instance=10.0.3.186%3A9100&theme=light&panelId=146"
                frameborder="0"
              ></iframe>
              <iframe
                className="panel15"
                src="http://addaf4a5ba7084490adcd388a4927520-211657959.ap-northeast-2.elb.amazonaws.com/d-solo/4b545447f/1-kubernetes-all-in-one-cluster-monitoring-kr-v1-26-0?orgId=1&refresh=30s&var-node=ip-10-0-3-186.ap-northeast-2.compute.internal&var-duration=5m&var-instance=10.0.3.186%3A9100&theme=light&panelId=154"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashOps;
