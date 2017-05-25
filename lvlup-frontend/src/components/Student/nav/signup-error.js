import React, { Component } from 'react';
import { Message, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class SignUpError extends Component {
  render() {
    return (
      <Message
        color="red"
        header="GitHub Error!"
      >
        <p>To sign up with GitHub you must have a public email. To set your email to public please go to Settings > Public profile and public email and select an email</p>
        <Button className="errorButton" basic color="orange"><a href="http://github.com">Click Here to Go To GitHub</a></Button><Link to={'/'}><Button className="errorButton" basic color="orange"> Click Here to Go Home</Button></Link>
      </Message>
    );
  }
}

export default SignUpError;
