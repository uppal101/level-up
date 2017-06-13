import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AdminLogin = () => (
  <Link to={'/login-admin'}>
    <Button inverted color="orange" size="small">
      Log In&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon name="user" />&nbsp;&nbsp;Sign Up
    </Button>
  </Link>
);

export default AdminLogin;
