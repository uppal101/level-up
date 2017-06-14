import React, { Component } from 'react';
import PendingSubmissionsTable from './pending-submissions';
import PendingRequestsTable from './pending-requests';

const AdminHome = () => (
  <div className="lvl-table">
    <PendingSubmissionsTable />
    <PendingRequestsTable />
  </div>
);

export default AdminHome;
