import React from 'react';
import { Message, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../nav/sidenav-styles.css';

const SignUpError = () => (
  <div className="oauth-error">
    <Message
      color="red"
      header="GitHub Error!"
    >
      <p>GitHub OAuth Error! Please return home and try again. If problem persists please contact: lvlupteam@lvlup.tech</p>
      <Link to={'/'}><Button basic color="orange"> Click Here to Go Home</Button></Link>
    </Message>
  </div>
);

export default SignUpError;
