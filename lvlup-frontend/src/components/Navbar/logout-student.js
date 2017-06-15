import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { loggingOutStudent } from '../../actions/navbar';

const LogOutGithub = props => (
  <Link to={'/'}>
    <Button inverted color="orange" size="small" onClick={() => props.loggingOutStudent()}>
      <Icon name="github" /> Log Out
    </Button>
  </Link>
);

const LogOutGithub = () => (
  <Link to={'/'}>
    <Button inverted color="orange" size="small" onClick={() => this.props.loggingOutStudent()}>
      <Icon name="github" /> Log Out
        </Button>
  </Link>
);

export default LogOutGithub;