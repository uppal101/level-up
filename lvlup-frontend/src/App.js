import React, { Component } from 'react';
import Home from './components/homepage-view/home';
import StudentHome from './components/student-main-view/student-main';
// import SignUpForm from './components/admin-signup/signup-page.js';
import AdminLogin from './components/admin-login/login';
import IndividualPendingChallenge from './components/admin-individual-pending-challenge/individual-pending-main';
import AdminHome from './components/admin-main-view/admin-main';
import AdminChallenges from './components/admin-challenges/admin-challenges-main';
import AdminRewards from './components/admin-rewards/admin-rewards-main';
import AddChallenge from './components/admin-add-challenge/add-challenge-main';
import EditChallenge from './components/admin-edit-challenge/edit-challenge-main';
import AddReward from './components/admin-add-reward/add-reward-main';
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
          <Route exact path="/admin-login" component={AdminLogin} />
          <Route exact path="/admin/dashboard" component={AdminHome} />
          <Route exact path="/admin/individual-pending-challenge" component={IndividualPendingChallenge} />
          <Route exact path="/admin/challenges" component={AdminChallenges} />
          <Route exact path="/admin/rewards" component={AdminRewards} />
          <Route exact path="/admin/challenge-add" component={AddChallenge} />
          <Route exact path="/admin/challenge-edit" component={EditChallenge} />
          <Route exact path="/admin/reward-add" component={AddReward} />
        </div>
      </Router>
    );
  }
}
