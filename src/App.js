import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route exact={true} path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
