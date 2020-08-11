import React, { Component } from 'react'
import axios from 'axios'
import { url } from '../../utils/config';
import headers from '../../utils/header'
import Sidebar from '../Sidebar'
import Topbar from '../Topbar'
import Footer from '../Footer'

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            image: "",
            slot: "",
            category: "",
            price: "",
            categories: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getCategories();

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const {name, image, slot, category, price} = this.state;
        
        let data = {
            name, 
            image,
            slot, 
            category, 
            price
        }

        console.log(data)
        axios.post(`${url}/category`, data, { headers: headers })
        .then(res => {
            if (res.status === 201) {
                console.log("product created")
            }
        })
        .catch( err => {
            console.log("product error", err)
        });
        
    }

    getCategories() {
        axios.get(`${url}/category`, 
        { headers: {
            'Content-Type': 'application/json'
        } }
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
                    <Topbar/>
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Products</h6>

                                </div>
                                <div className="card-body">
                                    <form className="forms-sample" onSubmit={this.handleSubmit}>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Name</label>
                                            <div className="col-sm-6">
                                            <input type="text" className="form-control" name="name" required
                                            onChange={this.handleChange} value={this.state.name} placeholder="Category Name"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Image</label>
                                            <div className="col-sm-6">
                                            <input type="file" className="form-control" name="image" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputEmail2" className="col-sm-3 col-form-label">Category</label>
                                            <div className="col-sm-6">
                                                <select className="form-control" name="category" onChange={this.handleChange} value={this.state.category} required>
                                                    <option value="" disabled>select product category</option>
                                                    {this.state.categories.sort((a, b) => { return a._id < b._id}).map((data, i) => 
                                                    <option key={i} value={data.name}>{data.name}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Slot</label>
                                            <div className="col-sm-6">
                                            <input type="text" className="form-control" name="slot" required
                                            onChange={this.handleChange} value={this.state.slot} placeholder="slot"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Price</label>
                                            <div className="col-sm-6">
                                            <input type="text" className="form-control" name="price" required
                                            onChange={this.handleChange} value={this.state.price} placeholder="Product Price"/>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                        
                                    </form>
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
