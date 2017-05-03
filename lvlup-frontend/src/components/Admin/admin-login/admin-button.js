import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './loginview.css';


class AdminDashButton extends Component {
  render() {
    return (
      <div className="login">
        <h1>Welcome Admin!</h1>
        <Link to={'/admin/dashboard'}><Button>Access Your Dashboard!</Button></Link>
      </div>
    );
  }
}

export default AdminDashButton;
