import React, { Component } from 'react';
import RewardsTable from './rewards-table';
import RewardsHeader from './header';
import '../student-main-view/student-styles.css';

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
