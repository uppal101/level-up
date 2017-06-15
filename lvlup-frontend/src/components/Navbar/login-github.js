import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const LoginGithub = () => (
  <a href={'/api/auth/github/'}>
    <Button inverted color="orange" size="small">
      Log In&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon name="github" />&nbsp;&nbsp;Sign Up
    </Button>
  </a>
);


export default LoginGithub;
