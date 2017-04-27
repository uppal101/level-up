import React, { Component } from 'react';
import HamburgerAdmin from '../admin-common/hamburger';


class AdminConfiguration extends Component {
  render() {
    return (
      <div>
        <HamburgerAdmin />
        <div className="admin-config" />
      </div>
    );
  }
}

export default AdminConfiguration;
