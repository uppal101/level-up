import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import './signupview.css';

class Password extends Component {
  render() {
    return (
      <Form className="forms">
        <Form.Field inline>
          <label>Password</label>
          <Input placeholder="Password" />
        </Form.Field>
      </Form>
    );
  }
}


export default Password;
