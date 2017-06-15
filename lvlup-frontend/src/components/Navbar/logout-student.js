import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LogOutGithub = props => (
  <Link to={'/'}>
    <Button inverted color="orange" size="small" onClick={() => props.loggingOutStudent()}>
      <Icon name="github" /> Log Out
    </Button>
  </Link>
);

export default LogOutGithub;
