import React, { Component } from 'react';
import Username from './username';
import Cohorts from './cohorts';
import SignUpButton from './button';
import WelcomeHeader from './header';
import './signupview.css';

class StudentSignUp extends Component {
  render() {
    return (
      <div className="signup">
        <WelcomeHeader />
        <Username />
        <Cohorts />
        <SignUpButton />
      </div>
    );
  }
}

export default StudentSignUp;
