import React, { Component } from 'react';
import RewardsTable from './rewards-table';
import RewardsHeader from './header';
import '../nav/sidenav-styles.css';

class StudentRewards extends Component {
  render() {
    return (
      <div className="studentDashboard">
        <RewardsHeader />
        <RewardsTable />
      </div>
    );
  }
}

export default StudentRewards;
