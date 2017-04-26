import React, { Component } from 'react';
import HamburgerAdmin from './hamburger';
import NavBarLoggedIn from '../navbar-loggedin';
import ChallengesHeader from './pending-challenges/header';
import ChallengesTable from './pending-challenges/challenges-table';

class AdminHome extends Component {
  render() {
    return (
      <div>
        <NavBarLoggedIn />
        <HamburgerAdmin />
        <div className="challenges">
          <ChallengesHeader />
          <ChallengesTable />
        </div>

      </div>
    );
  }
}

export default AdminHome;
