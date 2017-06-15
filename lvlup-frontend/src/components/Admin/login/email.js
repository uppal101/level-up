import React from 'react';
import { Form } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { renderField } from '../helpers/render-fields';
import { required, email, minValue7 } from '../helpers/validations';
import './loginview.css';


const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <Form className="email" onSubmit={handleSubmit(props.login)}>
      <Form.Field inline>
        <Field
          name="email"
          component={renderField}
          type="email"
          label=" Galvanize Email"
          placeholder="Email"
          validate={[required, email]}
        />
      </Form.Field>
      <Form.Field inline>
        <Field
          name="password"
          component={renderField}
          type="password"
          label="Password"
          placeholder="Password"
          validate={[required, minValue7]}
        />
      </Form.Field>
      <div id="admin-login-button">
        <Form.Button basic color="orange">Login</Form.Button>
      </div>
    </Form>
  );
};

export default LoginForm;
