import React, { Component } from 'react';
import HamburgerAdmin from '../admin-common/hamburger';
import NavBarLoggedIn from '../../navbar-loggedin';
import RewardsTable from './rewards-table';
import RewardsHeader from './header';
import AddButton from './button';


class AdminRewards extends Component {
  render() {
    return (
      <div>
        <NavBarLoggedIn />
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
