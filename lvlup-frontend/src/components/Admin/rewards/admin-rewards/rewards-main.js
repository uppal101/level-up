import React, { Component } from 'react';
import RewardsTable from './rewards-table';
import '../../dashboard/dashboard-styles.css';

class AdminRewards extends Component {
  render() {
    return (
      <div className="lvl-table">
        <h2 className="header">Rewards</h2>
        <RewardsTable />
      </div>
    );
  }
}

export default AdminRewards;
