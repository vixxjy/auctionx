import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="!#">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Auction <sup>X</sup></div>
                </a>
      
                <hr className="sidebar-divider my-0" />

                <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
                </li>
        
                <hr className="sidebar-divider"/>
        
                <div className="sidebar-heading">
                Products
                </div>

                <li className="nav-item">
                <a className="nav-link collapsed" href="!#" data-toggle="collapse" data-target="#products" aria-expanded="true" aria-controls="products">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Products</span>
                </a>
                <div id="products" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                    <a className="collapse-item" href="/product">All Product</a>
                    <a className="collapse-item" href="/add-product">Add Product</a>
                    {/* <a className="collapse-item" href="!#">Cards</a> */}
                    </div>
                </div>
                </li>

                {/* <div className="sidebar-heading">
                    Category
                </div> */}

                <li className="nav-item">
                <a className="nav-link collapsed" href="!#" data-toggle="collapse" data-target="#category" aria-expanded="true" aria-controls="category">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Category</span>
                </a>
                <div id="category" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                    <a className="collapse-item" href="/category">Add Category</a>
                    {/* <a className="collapse-item" href="!#">Cards</a> */}
                    </div>
                </div>
                </li>
                <hr className="sidebar-divider" />
        
                <div className="sidebar-heading">
                All Users
                </div>
                <li className="nav-item">
                <a className="nav-link collapsed" href="!#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>New Users</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Utilities:</h6>
                    <a className="collapse-item" href="!#">Colors</a>
                    <a className="collapse-item" href="!#">Borders</a>
                    </div>
                </div>
                </li>
        
                <hr className="sidebar-divider d-none d-md-block"/>
      
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
          </ul>
        )
    }
}
