import React, { Component } from 'react';
import Home from './components/homepage-view/home';
import StudentHome from './components/student-main-view/student-main';
// import SignUpForm from './components/admin-signup/signup-page.js';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard/student" component={StudentHome} />
        </div>
      </Router>
    );
  }
}
