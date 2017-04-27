import React, { Component } from 'react';
import HamburgerAdmin from '../admin-common/hamburger';
import NavBarLoggedIn from '../navbar-loggedin';
import EditRewardForm from './edit-reward-form';


class EditReward extends Component {
  render() {
    return (
      <div>
        <NavBarLoggedIn />
        <HamburgerAdmin />
        <div className="edit-reward">
          <EditRewardForm />
        </div>
      </div>
    );
  }
}

export default EditReward;
