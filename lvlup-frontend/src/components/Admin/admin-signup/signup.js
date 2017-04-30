import React, { Component } from 'react';
import Email from './email';
import './signupview.css';

class AdminSignup extends Component {
  render() {
    return (
      <div className="signup">
        <Email />
      </div>
    );
  }
}

export default AdminSignup;
