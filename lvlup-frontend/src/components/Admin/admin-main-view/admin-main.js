import React, { Component } from 'react';
import ChallengesHeader from './pending-challenges/header';
import RequestsHeader from './pending-rewards/header';
import ChallengesTable from './pending-challenges/challenges-table';
import RequestsTable from './pending-rewards/requests-table';

class AdminHome extends Component {
  render() {
    return (
      <div className="lvl-table">
        <ChallengesHeader />
        <ChallengesTable />
        <RequestsHeader />
        <RequestsTable />
      </div>

    );
  }
}

export default AdminHome;
