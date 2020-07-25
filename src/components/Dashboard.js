import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from './Footer'

export default class Dashboard extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div id="wrapper">
                {/* sidebar */}
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                    {/* topbar */}
                    <Topbar status={this.props.loggedInStatus}/>
                        <div className="container-fluid">
                        
                        <div className="row">
                            <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Products</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">40</div>
                                    </div>
                                    <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Amount</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800"> ₦ 0.00</div>
                                    </div>
                                    <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-info shadow h-100 py-2">
                                <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Customers</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50</div>
                                        </div>
                                        <div className="col">
                                        <div className="progress progress-sm mr-2">
                                            <div className="progress-bar bg-info" role="progressbar" style={{width: "70%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-left-warning shadow h-100 py-2">
                                <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Requests</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                    </div>
                                    <div className="col-auto">
                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="!#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                    <div className="dropdown-header">Dropdown Header:</div>
                                    {/* <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a> */}
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="!#">Something else here</a>
                                    </div>
                                </div>
                                </div>
                                <div className="card-body">
                                <div className="chart-area">
                                    <canvas id="myAreaChart"></canvas>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">New Customers</h6>
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="!#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                    <div className="dropdown-header">Dropdown Header:</div>
                                    {/* <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a> */}
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="!#">Something else here</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            </div>
                
                        </div>
                    </div>
                    {/* footer */}
                    <Footer />
                </div>
            </div>
        )
    }
}
