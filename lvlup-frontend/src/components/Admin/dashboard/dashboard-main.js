import React from 'react';
import PendingSubmissionsTable from './submissions-container';
import PendingRequestsTable from './requests-container';

const AdminHome = () => (
  <div className="lvl-table">
    <PendingSubmissionsTable />
    <PendingRequestsTable />
  </div>
);

export default AdminHome;
