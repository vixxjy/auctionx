import React, { Component } from 'react'
// import axios from 'axios'
// import { url } from '../../utils/config';
// import headers from '../../utils/header'
import Sidebar from '../Sidebar'
import Topbar from '../Topbar'
import Footer from '../Footer'

export default class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            categories: []
        }

    }

    render() {
        return (
            <div id="wrapper">
                {/* sidebar */}
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                    {/* topbar */}
                    <Topbar/>
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Products Category</h6>
                                <a href="/location">
                                <button className="btn btn-sm btn-primary float-right">Add Location</button>
                                </a>
                                <a href="!#">
                                <button className="btn btn-sm btn-primary float-right">Add User</button>
                                </a>
                                </div>
                                <div className="card-body">
                                    <div className="col-md-6">

                                    </div>
                                    <div className="col-md-6">

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
