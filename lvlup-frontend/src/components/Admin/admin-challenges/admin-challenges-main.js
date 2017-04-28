import React, { Component } from 'react';
import ChallengesTable from './challenges-table';
import ChallengesHeader from './header';
import AddButton from './button';


class AdminChallenges extends Component {
  render() {
    return (
      <div className="challenges">
        <ChallengesHeader />
        <ChallengesTable />
        <AddButton />
      </div>
    );
  }
}

export default AdminChallenges;
