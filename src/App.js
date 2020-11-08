import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Category from './components/Poducts/Category'
import Product from './components/Poducts/Product'
import ProductEdit from './components/Poducts/ProductEdit'
import ProductList from './components/Poducts/ProductList'
import Orders from './components/Poducts/Orders'
import Pools from './components/Poducts/Pools'
import Users from './components/Users'
import Location from './components/Settings/Location'
import Settings from './components/Settings/Setting'

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
      }
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data
    })
    this.props.history.push("/dashboard");
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={Login} 
            successfulAuth={this.handleSuccessfulAuth}
          />
          <Route 
          exact={true} 
          path="/dashboard" 
          //component={Dashboard}
          render = {props => (
            <Dashboard {...props} loggedInStatus={this.state.loggedInStatus}/>
          )} />
           <Route exact={true} path="/category" component={Category} 
          />
           <Route exact={true} path="/add-product" component={Product} 
          />
          <Route exact={true} path="/product" component={ProductList} 
          />
          <Route exact path="/product/:id" component={ProductEdit} 
          />
           <Route exact={true} path="/orders" component={Orders} 
          />
           <Route exact={true} path="/pools" component={Pools} 
          />
           <Route exact={true} path="/users" component={Users} 
          />
           <Route exact={true} path="/location" component={Location} 
          />
           <Route exact={true} path="/setting" component={Settings} 
          />
        </Switch>
      </div>
    );
  }
}

export default App;
