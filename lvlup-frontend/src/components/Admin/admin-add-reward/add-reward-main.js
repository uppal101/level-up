import React, { Component } from 'react';
import HamburgerAdmin from '../admin-common/hamburger';
import AddRewardForm from './add-reward-form';


class AddReward extends Component {
  render() {
    return (
      <div>
        <HamburgerAdmin />
        <div className="add-reward">
          <AddRewardForm />
        </div>
      </div>
    );
  }
}

export default AddReward;
