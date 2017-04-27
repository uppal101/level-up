import React, { Component } from 'react';
import HamburgerAdmin from '../admin-common/hamburger';
import NavBarLoggedIn from '../navbar-loggedin';

class AdminConfiguration extends Component {
  render() {
    return (
      <div>
        <NavBarLoggedIn />
        <HamburgerAdmin />
        <div className="admin-config" />
      </div>
    );
  }
}

export default AdminConfiguration;
