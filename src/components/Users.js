import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from './Footer'

export default class Users extends Component {
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

                            <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
                
                        </div>
                    </div>
                    {/* footer */}
                    <Footer />
                </div>
            </div>
        )
    }
}
