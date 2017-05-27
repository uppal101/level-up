import React, { Component } from 'react';
import PendingSubmissionsTable from './pending-submissions';
import PendingRequestsTable from './pending-requests';

class AdminHome extends Component {
  render() {
    return (
      <div className="lvl-table">
        <PendingSubmissionsTable />
        <PendingRequestsTable />
      </div>

    );
  }
}

export default AdminHome;
