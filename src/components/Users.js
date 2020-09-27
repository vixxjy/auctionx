import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from './Footer'
import axios from 'axios'
import { url } from '../utils/config';
import headers from '../utils/header'

export default class Users extends Component {constructor(props) {
    super(props);
    this.state = {
        name: "",
        image: "",
        urls: "",
        selectedFile: null,
        coverImage: null,
        loading: false,
        percentage: 0,
        categories: []
    }

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.getUsers = this.getUsers.bind(this);
}

componentDidMount() {
    this.getUsers();
}

getUsers() {
    axios.get(`${url}/users`, { headers: headers }
    )
    .then(res => {
        console.log(res);
        if (res.status === 200) {
            this.setState({
                categories: res.data.data
              });
        }
    })
    .catch( err => {
        console.log("get category error", err)
    });
}

    render() {
        return (
            <div id="wrapper">
                {/* sidebar */}
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                    {/* topbar */}
                    <Topbar />
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Registered Users</h6>
                                <a href="">
                                <button className="btn btn-sm btn-primary float-right">Add User</button>
                                </a>
                                </div>
                               
                            <hr />
                            <div className="table-responsive">
                                        
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Firstname</th>
                                            <th>Gender</th>
                                            <th>State</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Role</th>
                                            <th>Operations</th>
                                            <th>Status</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.categories.sort((a, b) => { return a._id < b._id}).map((data, i) => 
                                            <tr key={i}>
                                                <td>{data.firstName}</td>
                                                <td>{data.gender}</td>
                                                <td>{data.state}</td>
                                                <td>{data.email}</td>
                                                <td>{data.phone}</td>
                                                <td>{data.permission}</td>
                                                <td>{data.subscription_status}</td>
                                                {/* <td> 
                                                    <img src={data.image} style={{height: '50px', width: '50px'}} alt="imagec" />
                                                </td> */}
                                                <td>
                                                    <a href="!#">
                                                        <button className="btn btn-primary btn-sm">
                                                        <span className="fas fa-fw fa-pen"></span>
                                                        </button>
                                                    </a>
                                                    <button data-toggle="modal" data-target="" className="btn btn-danger btn-sm">
                                                    <span className="fas fa-fw fa-trash"></span>
                                                    </button>
                                                    
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>

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
