import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Login from './components/Login'
import Dashboard from './components/Dashboard'

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
        </Switch>
      </div>
    );
  }
}

export default App;
