import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import Topbar from '../Topbar'
import Footer from '../Footer'

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            image: ""
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
        const {name , image} = this.state;
        
        let data = {
            name, 
            image
        }

        console.log(data)
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
                                
                                        <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                        
                                    </form>
                                    <hr />
                                    <div className="table-responsive">
                                               
                                                    <table className="table table-striped">
                                                        <thead>
                                                            <tr>
                                                               
                                                                <th>Name</th>
                                                                <th>Image</th>
                                                                <th>Operations</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                  
                                                                <tr>
                                                                    <td></td>
                                                                    <td> 
                                                                        <img src="" alt="imagec" />
                                                                    </td>
                                                                    <td>
                                                                        <a href="!#">
                                                                            <button className="btn btn-primary btn-sm">
                                                                            <span className="glyphicon glyphicon-pencil"></span>
                                                                            </button>
                                                                        </a>
                                                                        <button data-toggle="modal" data-target="" className="btn btn-danger btn-sm">
                                                                        <span className="glyphicon glyphicon-trash"></span>
                                                                        </button>
                                                                        
                                                                    </td>
                                                                </tr>
                                                   
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
