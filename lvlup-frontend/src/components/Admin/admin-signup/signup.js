import React, { Component } from 'react';
import Email from './email';
// import Password from './password';
// import ConfirmPassword from './confirm-password';
// import Cohorts from './cohorts';
// import SignUpButton from './button';
import './signupview.css';

class AdminSignup extends Component {
  render() {
    return (
      <div className="signup">
        <Email />
        {/* <Password />
        <ConfirmPassword />
        <Cohorts />
        <SignUpButton /> */}
      </div>
    );
  }
}

export default AdminSignup;
