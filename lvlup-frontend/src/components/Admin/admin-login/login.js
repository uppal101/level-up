import React, { Component } from 'react';
import Navbar from './navbar.js';
import Email from './email.js';
import Password from './password.js';
import LoginButton from './button.js';
import './loginview.css';

class AdminLogin extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="login">
          <Email />
          <Password />
          <LoginButton />
        </div>
        <div className="signup">
          <p>
            Need an account? <a href="/admin-signup">Sign Up</a>. Valid Galvanize email required.
          </p>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
