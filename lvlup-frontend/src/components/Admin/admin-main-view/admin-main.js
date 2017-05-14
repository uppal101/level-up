import React, { Component } from 'react';
import ChallengesTable from './pending-challenges/challenges-table';
import RequestsTable from './pending-rewards/requests-table';

class AdminHome extends Component {
  render() {
    return (
      <div className="lvl-table">
        <h2 className="header">Pending Challenge Submissions</h2>
        <ChallengesTable />
        <h2 className="header">Pending Reward Requests</h2>
        <RequestsTable />
      </div>

    );
  }
}

export default AdminHome;
