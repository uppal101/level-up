import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import './signupview.css';

class Username extends Component {
  render() {
    return (
      <Form className="username">
        <Form.Field inline>
          <label>Username</label>
          <Input placeholder="Username" />
        </Form.Field>
      </Form>
    );
  }
}


export default Username;
