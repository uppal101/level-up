import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import './signupview.css';

class Email extends Component {
  render() {
    return (
      <Form className="email">
        <Form.Field inline>
          <label>Galvanize Email</label>
          <Input placeholder="Email" />
        </Form.Field>
      </Form>
    );
  }
}


export default Email;
