import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './signupview.css';

class SignupButton extends Component {
  render() {
    return (
      <div className="forms">
        <Button content="Sign Up" />
      </div>

    );
  }
}

export default SignupButton;
