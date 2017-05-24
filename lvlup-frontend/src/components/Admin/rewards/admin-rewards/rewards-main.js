import React, { Component } from 'react';
import RewardsTable from './rewards-table';
import '../../dashboard/dashboard-styles.css';

class AdminRewards extends Component {
  render() {
    return (
      <div className="lvl-table">
        <RewardsTable />
      </div>
    );
  }
}

export default AdminRewards;
