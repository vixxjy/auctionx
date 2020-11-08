import React, { Component } from 'react'
import axios from 'axios'
import { url } from '../../utils/config';
import headers from '../../utils/header'
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

    onDelete(id) {
        axios.delete(`${url}/products/${id}`, { headers: headers })
        .then(res => {
            //if (res.status === 201) {
                window.location.reload();
            //}
        })
        .catch( err => {
            console.log("product delete error", err)
        });
        //this.setState({})
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
                                                                <th>Price</th>
                                                                <th>Total Slot</th>
                                                                <th>Operations</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        {this.state.products.sort((a, b) => { return a._id < b._id}).map((data, i) => 
                                                                <tr key={i}>
                                                                    <td>{data.name}</td>
                                                                    <td> 
                                                                        <img src={data.image} style={{height: '50px', width: '50px'}} alt="imagec" />
                                                                    </td>
                                                                    <td>₦ {data.price}</td>
                                                                    <td><span className="badge badge-success">{data.total_slot}</span></td>
                                                                    <td>
                                                                        <a href={`/product/${data._id}`}>
                                                                            <button className="btn btn-primary btn-sm">
                                                                            <span className="fas fa-fw fa-pen"></span>
                                                                            </button>
                                                                        </a>
                                                                        <button data-toggle="modal" data-target={`#deleteModal${data._id}`} className="btn btn-danger btn-sm">
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
                    {this.state.products.map((data, i) => 
                    <div key={i} className="modal" id={`deleteModal${data._id}`} tabIndex="-1" role="dialog">
                                 <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Delete Confirmation</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p> "Are you sure you want to delete?"</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">NO</button>
                                        <button type="button" className="btn btn-primary" onClick={this.onDelete.bind(this, data._id)}>Yes</button>
                                    </div>
                                    </div>
                                </div>
                        </div>
                      )}
                    {/* footer */}
                    <Footer />
                </div>
            </div>
        )
    }
}
