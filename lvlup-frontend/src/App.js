import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Home from './components/Home/home';
import NavBar from './components/Navbar/navbar';
import AdminSignUp from './components/Admin/signup/signup';
import AdminLogin from './components/Admin/login/login';
import SelectedChallenge from './components/Admin/challenges/admin-challenges/individual-challenge';
import AdminHome from './components/Admin/dashboard/dashboard-main';
import AdminChallenges from './components/Admin/challenges/admin-challenges/challenges-main';
import AdminRewards from './components/Admin/rewards/admin-rewards/rewards-main';
import AddChallenge from './components/Admin/challenges/add-challenge/add-challenge-main';
import EditChallenge from './components/Admin/challenges/edit-challenge/edit-challenge-main';
import AddReward from './components/Admin/rewards/add-reward//add-reward-main';
import EditReward from './components/Admin/rewards/edit-reward/edit-reward-main';
import StudentChallenges from './components/Student/challenges/challenges-main';
import SubmissionMain from './components/Student/submissions/submission-main';
import StudentRewards from './components/Student/rewards/rewards-main';
import StudentRewardRequest from './components/Student/requests/request-main';
import StudentSidenav from './components/Student/nav/sidenav';
import AdminSidenav from './components/Admin/nav/sidenav';
import StudentDashboard from './components/Student/dashboard/dashboard-main';
import AdminConfiguration from './components/Admin/config/config-main';


import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div id="app-div">
            <Grid id="app-grid">
              <Grid.Row id="nav-row">
                <Grid.Column id="nav-col" width={16}>
                  <NavBar />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row id="main-row">
                <Grid.Column id="content-col" width={16}>

                  <Route exact path="/" component={Home} />
                  <Route path="/student" component={StudentSidenav} />
                  <Route path="/admin" component={AdminSidenav} />
                  {/* </Grid.Column>
                    <Grid.Column width={14}> */}
                  <Route exact path="/student/dashboard" component={StudentDashboard} />
                  <Route exact path="/student/challenges" component={StudentChallenges} />
                  <Route path="/student/challenge-submission/:id" component={SubmissionMain} />
                  <Route exact path="/student/rewards" component={StudentRewards} />
                  <Route exact path="/student/reward-request/:id" component={StudentRewardRequest} />
                  <Route exact path="/login-admin" component={AdminLogin} />
                  <Route exact path="/signup-admin" component={AdminSignUp} />
                  <Route exact path="/admin/dashboard" component={AdminHome} />
                  <Route exact path="/admin/individual-pending-challenge/:id" component={SelectedChallenge} />
                  <Route exact path="/admin/challenges" component={AdminChallenges} />
                  <Route exact path="/admin/rewards" component={AdminRewards} />
                  <Route exact path="/admin/challenge-add" component={AddChallenge} />
                  <Route exact path="/admin/challenge-edit/:id" component={EditChallenge} />
                  <Route exact path="/admin/reward-add" component={AddReward} />
                  <Route exact path="/admin/reward-edit/:id" component={EditReward} />
                  <Route exact path="/admin/configuration" component={AdminConfiguration} />
                  {/* </Grid.Column>

                  </Grid.Row> */}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Router>
      </div>
    );
  }
}
