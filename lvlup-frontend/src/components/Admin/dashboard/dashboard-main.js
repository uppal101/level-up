import React from 'react';
import PendingSubmissionsTable from './submissions-container';
import PendingRequestsTable from './requests-container';

const AdminHome = () => (
  <div className="lvl-table" id="admin-dash">
    <PendingSubmissionsTable />
    <PendingRequestsTable />
  </div>
);

export default AdminHome;
