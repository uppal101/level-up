import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './homeview.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Button.Group floated="right">
          <Link to={'/login-admin'}><Button color="orange">Admin</Button></Link>
        </Button.Group>
      </div>
    );
  }
}

export default Footer;
