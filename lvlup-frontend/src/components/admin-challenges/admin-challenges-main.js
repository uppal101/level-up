import React, { Component } from 'react';
import HamburgerAdmin from '../admin-common/hamburger';
import NavBarLoggedIn from '../navbar-loggedin';
import ChallengesTable from './challenges-table';


class AdminChallenges extends Component {
  render() {
    return (
      <div>
        <NavBarLoggedIn />
        <HamburgerAdmin />
        <ChallengesTable />
      </div>
    );
  }
}

export default AdminChallenges;
