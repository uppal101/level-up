import React, { Component } from 'react';
import ChallengesTable from './challenges-table';

class AdminChallenges extends Component {
  render() {
    return (
      <div className="lvl-table">
        <ChallengesTable />
      </div>
    );
  }
}

export default AdminChallenges;
