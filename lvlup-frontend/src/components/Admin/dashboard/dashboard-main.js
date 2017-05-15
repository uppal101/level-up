import React, { Component } from 'react';
import PendingSubmissionsTable from './pending-submissions';
import PendingRequestsTable from './pending-requests';

class AdminHome extends Component {
  render() {
    return (
      <div className="lvl-table">
        <h2 className="header">Pending Challenge Submissions</h2>
        <PendingSubmissionsTable />
        <h2 className="header">Pending Reward Requests</h2>
        <PendingRequestsTable />
      </div>

    );
  }
}

export default AdminHome;
