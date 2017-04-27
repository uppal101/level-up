import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './homeview.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Button.Group floated="right">
          <Button color="grey" href="/admin-login">Admin Login</Button>
          <Button color="grey">Admin Sign Up</Button>
        </Button.Group>
      </div>
    );
  }
}

export default Footer;
