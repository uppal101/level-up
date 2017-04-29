import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import './loginview.css';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form className="email">
        <Form.Field inline>
          <label>Galvanize Email</label>
          <Input placeholder="Email" />
          <Field name="email" component="input" type="email" />
        </Form.Field>
        <Form.Field inline>
          <label>Password</label>
          <Input placeholder="Password" />
          <Field name="password" component="input" type="text" />
        </Form.Field>
        <Form.Button>Login</Form.Button>
      </Form>
    );
  }
}

LoginForm = reduxForm({
  form: 'contact',
})(LoginForm);

export default LoginForm;
