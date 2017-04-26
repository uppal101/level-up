import React, { Component } from 'react';
import HamburgerAdmin from './hamburger';
import NavBarLoggedIn from '../navbar-loggedin';

class AdminHome extends Component {
  render() {
    return (
      <div>
        <NavBarLoggedIn />
        <HamburgerAdmin />
      </div>
    );
  }
}

export default AdminHome;
