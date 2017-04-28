import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import './signupview.css';

class ConfirmPassword extends Component {
  render() {
    return (
      <Form className="forms">
        <Form.Field inline>
          <label>Confirm Password</label>
          <Input placeholder=" Confirm Password" />
        </Form.Field>
      </Form>
    );
  }
}


export default ConfirmPassword;
