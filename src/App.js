import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './styles.scss'

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ErrorPage from './pages/ErrorPage';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route path="/dashboard" exact component={DashboardPage} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
    );
  }
}

export default App;
