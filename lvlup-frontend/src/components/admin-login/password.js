import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import './loginview.css';

class Password extends Component {
  render() {
    return (
      <Form className="password">
        <Form.Field inline>
          <label>Password</label>
          <Input placeholder="Password" />
        </Form.Field>
      </Form>
    );
  }
}


export default Password;
