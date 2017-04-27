import React, { Component } from 'react';
import HamburgerAdmin from '../admin-common/hamburger';
import NavBarLoggedIn from '../navbar-loggedin';
import ChallengesHeader from './pending-challenges/header';
import SubmissionsHeader from './pending-submissions/header';
import ChallengesTable from './pending-challenges/challenges-table';
import SubmissionsTable from './pending-submissions/submissions-table';

class AdminHome extends Component {
  render() {
    return (
      <div>
        <NavBarLoggedIn />
        <HamburgerAdmin />
        <div className="dashboard">
          <ChallengesHeader />
          <ChallengesTable />
          <SubmissionsHeader />
          <SubmissionsTable />
        </div>
      </div>
    );
  }
}

export default AdminHome;
