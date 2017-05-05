import React, { Component } from 'react';
import RewardsTable from './rewards-table';
import RewardsHeader from './header';
import AddButton from './button';
import '../admin-main-view/admin-styles.css';


class AdminRewards extends Component {
  render() {
    return (
      <div className="lvl-table">
        <RewardsHeader />
        <RewardsTable />
        <AddButton />
      </div>
    );
  }
}

export default AdminRewards;
