import React, { Component } from 'react';
import ChallengesTable from './challenges-table';
import '../../dashboard/dashboard-styles.css';

class AdminChallenges extends Component {
  render() {
    return (
      <div className="lvl-table">
        <h2 className="header">Challenges</h2>
        <ChallengesTable />
      </div>
    );
  }
}

export default AdminChallenges;
