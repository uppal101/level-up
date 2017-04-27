import React, { Component } from 'react';
import HamburgerAdmin from '../admin-common/hamburger';
import NavBarLoggedIn from '../../navbar-loggedin';


class IndividualPendingChallenge extends Component {
  render() {
    return (
      <div>
        <NavBarLoggedIn />
        <HamburgerAdmin />
      </div>
    );
  }
}

export default IndividualPendingChallenge;
