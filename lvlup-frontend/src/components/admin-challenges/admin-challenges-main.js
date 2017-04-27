import React, { Component } from 'react';
import HamburgerAdmin from '../admin-common/hamburger';
import NavBarLoggedIn from '../navbar-loggedin';
import ChallengesTable from './challenges-table';
import ChallengesHeader from './header';


class AdminChallenges extends Component {
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

export default AdminChallenges;
