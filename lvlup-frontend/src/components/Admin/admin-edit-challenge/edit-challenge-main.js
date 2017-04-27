import React, { Component } from 'react';
import HamburgerAdmin from '../admin-common/hamburger';
import EditChallengeForm from './edit-challenge-form';


class EditChallenge extends Component {
  render() {
    return (
      <div>
        <HamburgerAdmin />
        <div className="edit-challenge">
          <EditChallengeForm />
        </div>
      </div>
    );
  }
}

export default EditChallenge;
