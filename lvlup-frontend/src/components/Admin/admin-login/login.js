import React, { Component } from 'react';
import Email from './email.js';
import Password from './password.js';
import LoginButton from './button.js';
import { Link } from 'react-router-dom';
import './loginview.css';

class AdminLogin extends Component {
  render() {
    return (
      <div>
        <div className="login">
          <Email />
          <Password />
          <LoginButton />
        </div>
        <div className="signup">
          <p>
            Need an account?<Link to={'/admin-signup'}> Sign Up</Link>. Valid Galvanize email required. </p>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
