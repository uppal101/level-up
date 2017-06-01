import React, { Component } from 'react';
import AddACohortForm from './config-add-cohort';


class AdminConfiguration extends Component {
  render() {
    return (
      <div className="admin-config">
        <AddACohortForm />
      </div>
    );
  }
}

export default AdminConfiguration;
