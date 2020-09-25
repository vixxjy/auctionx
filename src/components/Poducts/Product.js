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
            thumbnail: "",
            description: "",
            total_slot: "",
            available_slot: "",
            location: "",
            category: "",
            price: "",
            status: "",
            hot: "",
            user_type: "",
            last_viewed: "",
            scheduled_date: "",
            end_date: "",
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
        const {name, image, total_slot, available_slot, thumbnail, description, category, 
            price, location, user_type, status, hot} = this.state;
        
        let data = {
            name, 
            image, 
            category, 
            total_slot, 
            available_slot, 
            thumbnail, 
            description,
            price,
            location, 
            user_type, 
            status,
            hot
        }

        console.log(data)
        // axios.post(`${url}/products`, data, { headers: headers })
        // .then(res => {
        //     if (res.status === 201) {
        //         console.log("product created")
        //         this.props.history.push("/product");
        //     }
        // })
        // .catch( err => {
        //     console.log("product error", err)
        // });
        
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
                                            onChange={this.handleChange} value={this.state.name} placeholder="Product Name"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Image</label>
                                            <div className="col-sm-6">
                                            <input type="file" className="form-control" name="image" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Thumbnail</label>
                                            <div className="col-sm-6">
                                            <input type="file" className="form-control" name="thumbnail" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputEmail2" className="col-sm-3 col-form-label">Category</label>
                                            <div className="col-sm-6">
                                                <select className="form-control" name="category" onChange={this.handleChange} value={this.state.category} required>
                                                    <option value="" disabled>select product category</option>
                                                    {this.state.categories.sort((a, b) => { return a._id < b._id}).map((data, i) => 
                                                    <option key={i} value={data._id}>{data.name}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                        {/* <div className="form-group row">
                                            <label htmlFor="exampleInputEmail2" className="col-sm-3 col-form-label">Status</label>
                                            <div className="col-sm-6">
                                                <select className="form-control" name="status" onChange={this.handleChange} value={this.state.status} required>
                                                    <option value="" disabled>select product status</option>
                                                    <option value="open">Open</option>
                                                    <option value="selling">Selling</option>
                                                    <option value="sold">Sold</option>
                                                    <option value="soon">Soon</option>
                                                </select>
                                            </div>
                                        </div> */}
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputEmail2" className="col-sm-3 col-form-label">User Type</label>
                                            <div className="col-sm-6">
                                                <select className="form-control" name="user_type" onChange={this.handleChange} value={this.state.user_type} required>
                                                    <option value="" disabled>select user type</option>
                                                    <option value="premium">premium</option>
                                                    <option value="starter">starter</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputEmail2" className="col-sm-3 col-form-label">Hot</label>
                                            <div className="col-sm-6">
                                                <select className="form-control" name="hot" onChange={this.handleChange} value={this.state.hot} required>
                                                    <option value="" disabled>select hot deals</option>
                                                    <option value="true">YES</option>
                                                    <option value="false">NO</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Location</label>
                                            <div className="col-sm-6">
                                            <input type="text" className="form-control" name="location" required
                                            onChange={this.handleChange} value={this.state.location} placeholder="loacation"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Total Slot</label>
                                            <div className="col-sm-6">
                                            <input type="text" className="form-control" name="total_slot" required
                                            onChange={this.handleChange} value={this.state.total_slot} placeholder="Total slot"/>
                                            </div>
                                        </div>
                                        {/* <div className="form-group row">
                                            <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Available Slot</label>
                                            <div className="col-sm-6">
                                            <input type="text" className="form-control" name="available_slot" required
                                            onChange={this.handleChange} value={this.state.available_slot} placeholder="Available slot"/>
                                            </div>
                                        </div> */}
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">last Viewed</label>
                                            <div className="col-sm-6">
                                            <input type="text" className="form-control" name="last_viewed" required
                                            onChange={this.handleChange} value={this.state.last_viewed} placeholder="last_viewed"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Scheduled Date</label>
                                            <div className="col-sm-6">
                                            <input type="text" className="form-control" name="scheduled_date" required
                                            onChange={this.handleChange} value={this.state.scheduled_date} placeholder="scheduled_date"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">End Date</label>
                                            <div className="col-sm-6">
                                            <input type="date" className="form-control" name="end_date" required
                                            onChange={this.handleChange} value={this.state.end_date} placeholder="end_date"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Price</label>
                                            <div className="col-sm-6">
                                            <input type="date" className="form-control" name="price" required
                                            onChange={this.handleChange} value={this.state.price} placeholder="Product Price"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Description</label>
                                            <div className="col-sm-6">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" 
                                            name="description" onChange={this.handleChange} value={this.state.description}></textarea>
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
