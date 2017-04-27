import React, { Component } from 'react';
import HamburgerAdmin from '../admin-common/hamburger';
import NavBarLoggedIn from '../navbar-loggedin';
import AddRewardForm from './add-reward-form';


class AddReward extends Component {
  render() {
    return (
      <div>
        <NavBarLoggedIn />
        <HamburgerAdmin />
        <div className="add-reward">
          <AddRewardForm />
        </div>
      </div>
    );
  }
}

export default AddReward;
