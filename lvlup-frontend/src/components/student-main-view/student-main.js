import React, { Component } from 'react';
import HamburgerStudent from './hamburger';
import NavBarLoggedIn from '../navbar-loggedin';

class StudentHome extends Component {
  render() {
    return (
      <div>
        <NavBarLoggedIn />
        <HamburgerStudent />
      </div>
    );
  }
}

export default StudentHome;
