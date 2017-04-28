import React, { Component } from 'react';
import Home from './components/homepage-view/home';
// import Footer from './components/homepage-view/footer';
import NavBar from './components/navbar';
import StudentHome from './components/Student/student-main-view/student-main';
import StudentSignUp from './components/Student/student-signup/signup';
import AdminSignUp from './components/Admin/admin-signup/signup';
import AdminLogin from './components/Admin/admin-login/login';
import IndividualPendingChallenge from './components/Admin/admin-individual-pending-challenge/individual-pending-main';
import AdminHome from './components/Admin/admin-main-view/admin-main';
import AdminChallenges from './components/Admin/admin-challenges/admin-challenges-main';
import AdminRewards from './components/Admin/admin-rewards/admin-rewards-main';
import AddChallenge from './components/Admin/admin-add-challenge/add-challenge-main';
import EditChallenge from './components/Admin/admin-edit-challenge/edit-challenge-main';
import AddReward from './components/Admin/admin-add-reward/add-reward-main';
import EditReward from './components/Admin/admin-edit-reward/edit-reward-main';

import StudentChallenges from './components/Student/challenges/challenges';
import HamburgerStudent from './components/Student/student-main-view/hamburger';
import HamburgerAdmin from './components/Admin/admin-common/hamburger';
import StudentDashboard from './components/Student/dashboard/student-dashboard';
import AdminConfiguration from './components/Admin/admin-config/config-main';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/student" component={HamburgerStudent} />
            <Route path="/admin" component={HamburgerAdmin} />
            <Route exact path="/signup-student" component={StudentSignUp} />
            <Route exact path="/student/dashboard" component={StudentDashboard} />
            <Route exact path="/student/challenges" component={StudentChallenges} />
            <Route exact path="/login-admin" component={AdminLogin} />
            <Route exact path="/signup-admin" component={AdminSignUp} />
            <Route exact path="/admin/dashboard" component={AdminHome} />
            <Route exact path="/admin/individual-pending-challenge" component={IndividualPendingChallenge} />
            <Route exact path="/admin/challenges" component={AdminChallenges} />
            <Route exact path="/admin/rewards" component={AdminRewards} />
            <Route exact path="/admin/challenge-add" component={AddChallenge} />
            <Route exact path="/admin/challenge-edit" component={EditChallenge} />
            <Route exact path="/admin/reward-add" component={AddReward} />
            <Route exact path="/admin/reward-edit" component={EditReward} />
            <Route exact path="/admin/configuration" component={AdminConfiguration} />
          </div>
        </Router>
      </div>
    );
  }
}
