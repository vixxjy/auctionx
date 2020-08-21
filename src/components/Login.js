import React, { Component } from 'react'
import axios from 'axios'
//import headers from '../utils/header'
import { url } from '../utils/config';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        const {email , password} = this.state;
        let data = {
            email, 
            password,
            strategy: "local"
        }
        
        axios.post(`${url}/authentication`, data)
            .then(res => {
                //console.log(res.data);
                const { accessToken } = res.data
                if (res.status === 201) {
                   localStorage.setItem('accessToken', accessToken);
                    //this.props.successfulAuth(user);
                    this.props.history.push("/dashboard");
                }
            })
            .catch( err => {
                console.log("login error", err)
                this.setState({loginErrors: "Username & Password is not correct"});
            });
            
            e.preventDefault();
    }


    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                            <div className="col-lg-12"> 
                                <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    { this.state.loginErrors &&
                                        <div class="alert alert-danger" role="alert">
                                       { this.state.loginErrors }
                                      </div> }
                                </div>
                                <form className="user" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                    <input type="email" name="email" onChange={this.handleChange} value={this.state.email} className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."/>
                                    </div>
                                    <div className="form-group">
                                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password}  className="form-control form-control-user" id="exampleInputPassword" placeholder="Password"/>
                                    </div>
                                    <div className="form-group">
                                    <div className="custom-control custom-checkbox small">
                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                        <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                    </div>
                                    </div>
                                    <button className="btn btn-primary btn-user btn-block">
                                    Login
                                    </button>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    }

