import React, { Component } from 'react';
import Navbar from './navbar.js';
import Email from './email.js';

class AdminLogin extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Email />
      </div>
    );
  }
}

export default AdminLogin;
