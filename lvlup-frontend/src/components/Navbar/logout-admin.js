import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LogOutAdmin = props => (
  <Link to={'/'}>
    <Button inverted color="orange" size="small" onClick={() => props.loggingOutAdmin()}>
      <Icon name="remove circle" /> Log Out
    </Button>
  </Link>
);

export default LogOutAdmin;
