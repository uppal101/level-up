import React, { Component } from 'react';
import RewardsTable from './rewards-table';
import RewardsHeader from './header';
import AddButton from './button';


class StudentRewards extends Component {
  render() {
    return (
      <div className="rewards">
        <RewardsHeader />
        <RewardsTable />
        <AddButton />
      </div>
    );
  }
}

export default StudentRewards;
