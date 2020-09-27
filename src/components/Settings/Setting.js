import React, { Component } from 'react'
import axios from 'axios'
import { url } from '../../utils/config';
import headers from '../../utils/header'
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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getCategories = this.getCategories.bind(this);
    }

    componentDidMount() {
        this.getCategories();
    }

    fileChangedHandler = event => {
        const file = event.target.files[0];

        let self = this;
        self.setState({ selectedFile: file });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {            
        e.preventDefault();
        this.setState({ percentage: 20})
        const {name, selectedFile} = this.state;

        let urls = null;

        this.setState({loading: true, percentage: 40 })
        const formData = new FormData();

        formData.append(
            'uri', selectedFile
        );
   
        axios.post(`${url}/upload/`, formData, { headers: headers })
        .then( res => {
           

            if (res.status === 201) {
                console.log("Upload successful");
                
                urls = res.data.url;

                this.setState({image: urls, percentage: 60})
            }
            
        })
        .then( res => {

            const {image} = this.state;
            
            let data = {
                name, 
                image
            }
    
             axios.post(`${url}/category`, data, { headers: headers })
            .then(res => {
                if (res.status === 201) {
                    console.log("category created")
                    this.setState({percentage: 100})
                }
            })
            .catch( err => {
                console.log("category error", err)
            });
        })
        .catch( err => {
            console.log("Upload error", err)
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
                console.log("get category created")
            }
        })
        .catch( err => {
            console.log("get category error", err)
        });
    }

    onDelete(id) {

        this.setState({})
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
                                            <input type="file" className="form-control" name="image" onChange={this.fileChangedHandler}/>
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
                                            {this.state.categories.sort((a, b) => { return a._id < b._id}).map((data, i) => 
                                                    <tr key={i}>
                                                        <td>{data.name}</td>
                                                        <td> 
                                                            <img src={data.image} style={{height: '50px', width: '50px'}} alt="imagec" />
                                                        </td>
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
