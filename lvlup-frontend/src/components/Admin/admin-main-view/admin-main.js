import React, { Component } from 'react';
import ChallengesHeader from './pending-challenges/header';
import SubmissionsHeader from './pending-submissions/header';
import ChallengesTable from './pending-challenges/challenges-table';
import SubmissionsTable from './pending-submissions/submissions-table';

class AdminHome extends Component {
  render() {
    return (
      <div className="dashboard">
        <ChallengesHeader />
        <ChallengesTable />
        <SubmissionsHeader />
        <SubmissionsTable />
      </div>

    );
  }
}

export default AdminHome;
