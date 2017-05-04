import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

class LoginGithub extends Component {
  render() {
    return (
      <a href={'/api/auth/github/'}>
        <Button color="orange">
          <Icon name="github" /> Log In or Sign Up with Github
        </Button>
      </a>
    );
  }
}

export default LoginGithub;
