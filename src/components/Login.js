import React, { Component } from 'react'
import axios from 'axios'
//import headers from '../utils/header'

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
        console.log(email, password);
        axios
            .post(
                "https://foodpoolfarm.herokuapp.com/authentication",
                {
                    email: email,
                    password: password,
                    strategy: "local"
                },
                {withCredentials: true},
                //{ headers: headers }
            )
            .then(res => {
                console.log(res)
                if (res.data.status === 200) {
                   // localStorage.setItem('accessToken', token); 
                    this.props.handleSuccessfulAuth(res.data);
                }
            })
            .catch( err => {
                console.log("login error", err)
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

