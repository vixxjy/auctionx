import React, { Component } from 'react'
import axios from 'axios'
import { url } from '../../utils/config';
import Sidebar from '../Sidebar'
import Topbar from '../Topbar'
import Footer from '../Footer'

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
        this.getProducts = this.getProducts.bind(this);
    }

    
    componentDidMount() {
        this.getProducts();
    }

    getProducts() {
        axios.get(`${url}/products`, 
        { headers: {
            'Content-Type': 'application/json'
        } }
        )
        .then(res => {
            console.log(res);
            if (res.status === 200) {
                this.setState({
                    products: res.data.data
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
                                    <div className="table-responsive">
                                               
                                                    <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                               
                                                                <th>Name</th>
                                                                <th>Image</th>
                                                                <th>Slot</th>
                                                                <th>Status</th>
                                                                <th>Operations</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        {this.state.products.sort((a, b) => { return a._id < b._id}).map((data, i) => 
                                                                <tr key={i}>
                                                                    <td>{data.name}</td>
                                                                    <td> 
                                                                        <img src="https://pandafoods.co.in/wp-content/uploads/2015/02/spices-0011.jpg" style={{height: '50px', width: '50px'}} alt="imagec" />
                                                                    </td>
                                                                    <td>{data.slot}</td>
                                                                    <td><span className="badge badge-success">{data.status}</span></td>
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
                    </div>
                    {/* footer */}
                    <Footer />
                </div>
            </div>
        )
    }
}
