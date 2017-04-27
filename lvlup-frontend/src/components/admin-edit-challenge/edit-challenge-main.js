import React, { Component } from 'react';
import HamburgerAdmin from '../admin-common/hamburger';
import NavBarLoggedIn from '../navbar-loggedin';
import EditChallengeForm from './edit-challenge-form';


class EditChallenge extends Component {
  render() {
    return (
      <div>
        <NavBarLoggedIn />
        <HamburgerAdmin />
        <div className="edit-challenge">
          <EditChallengeForm />
        </div>
      </div>
    );
  }
}

export default EditChallenge;
