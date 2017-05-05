import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './homeview.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Link to={'/login-admin'}><Button inverted color="orange" size="small" floated="right">Admin</Button></Link>
      </div>
    );
  }
}

export default Footer;
