import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './loginview.css';

class LoginButton extends Component {
  render() {
    return (
      <div className="button">
        <Button content="Submit" />
      </div>

    );
  }
}

export default LoginButton;
