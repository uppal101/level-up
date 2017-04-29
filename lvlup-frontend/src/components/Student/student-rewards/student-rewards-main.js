import React, { Component } from 'react';
import RewardsTable from './rewards-table';
import RewardsHeader from './header';

class StudentRewards extends Component {
  render() {
    return (
      <div className="rewards">
        <RewardsHeader />
        <RewardsTable />
      </div>
    );
  }
}

export default StudentRewards;
