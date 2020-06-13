import React, { Component } from 'react'

export default class Topbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="!#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-bell fa-fw"></i>
                    <span className="badge badge-danger badge-counter">3+</span>
                </a>
                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                    <h6 className="dropdown-header">
                    Alerts Center
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="!#">
                    <div className="mr-3">
                        <div className="icon-circle bg-primary">
                        <i className="fas fa-file-alt text-white"></i>
                        </div>
                    </div>
                    <div>
                        <div className="small text-gray-500">December 12, 2019</div>
                        <span className="font-weight-bold">A new monthly report is ready to download!</span>
                    </div>
                    </a>
                </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="!#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-envelope fa-fw"></i>
                    <span className="badge badge-danger badge-counter">7</span>
                </a>
                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                    <h6 className="dropdown-header">
                    Message Center
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt="" />
                        <div className="status-indicator bg-success"></div>
                    </div>
                    <div className="font-weight-bold">
                        <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                        <div className="small text-gray-500">Emily Fowler · 58m</div>
                    </div>
                    </a>
                </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                    <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60"  />
                </a>

                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                    </a>
                    <a className="dropdown-item" href="#">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="!#" data-toggle="modal" data-target="#logoutModal">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                    </a>
                </div>
                </li>
            </ul>
        </nav>
        )
    }
}
