import React, { Component } from 'react';
import HamburgerAdmin from '../admin-common/hamburger';
import NavBarLoggedIn from '../../navbar-loggedin';
import AddChallengeForm from './add-challenge-form';


class AddChallenge extends Component {
  render() {
    return (
      <div>
        <NavBarLoggedIn />
        <HamburgerAdmin />
        <div className="add-challenge">
          <AddChallengeForm />
        </div>
      </div>
    );
  }
}

export default AddChallenge;
