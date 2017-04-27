import React, { Component } from 'react';
import HamburgerAdmin from '../admin-common/hamburger';
import RewardsTable from './rewards-table';
import RewardsHeader from './header';
import AddButton from './button';


class AdminRewards extends Component {
  render() {
    return (
      <div>
        <HamburgerAdmin />
        <div className="rewards">
          <RewardsHeader />
          <RewardsTable />
          <AddButton />
        </div>
      </div>
    );
  }
}

export default AdminRewards;
