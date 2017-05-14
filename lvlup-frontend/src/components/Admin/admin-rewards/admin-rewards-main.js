import React, { Component } from 'react';
import RewardsTable from './rewards-table';
import RewardsHeader from './header';
import '../admin-main-view/admin-styles.css';

class AdminRewards extends Component {
  render() {
    return (
      <div className="lvl-table">
        <RewardsHeader />
        <RewardsTable />
      </div>
    );
  }
}

export default AdminRewards;
