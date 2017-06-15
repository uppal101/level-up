import React from 'react';
import { Form, Button, Loader } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { renderField, renderMultiSelectField, renderSelectField } from '../helpers/render-fields';
import { required, minValue7, email } from '../helpers/validations';
import './signupview.css';

const SignupForm = (props) => {
  if (props.cohorts.length === 0 && props.campuses.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  const { handleSubmit } = props;
  return (
    <Form className="forms" onSubmit={handleSubmit(props.signup)}>

      <Form.Field inline>
        <Field
          name="name"
          component={renderField}
          type="text"
          label=" Enter Your Name"
          placeholder="Name"
          validate={[required]}
        />
      </Form.Field>

      <Form.Field inline>
        <Field
          name="email"
          component={renderField}
          type="email"
          label="Galvanize Email"
          placeholder="Email"
          validate={[required, email]}
        />
      </Form.Field>

      <Form.Field inline>
        <Field
          name="username"
          component={renderField}
          type="text"
          label="Username"
          placeholder="Username"
          validate={[required, minValue7]}
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

      <Form.Field inline>
        <Field
          name="confirm-password"
          component={renderField}
          type="password"
          label="Confirm Password"
          placeholder="Confirm Password"
          validate={[required, minValue7]}
        />
      </Form.Field>

      <Form.Field inline>
        <Field
          name="campuses"
          component={renderSelectField}
          type="text"
          label="Campuses"
          placeholder="Select Campus"
          validate={[required]}
        >
          <option default>Select Campus</option>
          { props.campuses.map(option => <option value={option.id}>{option.location}</option>)}
        </Field>
      </Form.Field>

      <Form.Field inline>
        <Field
          name="cohorts"
          component={renderMultiSelectField}
          type="text"
          label="Cohorts"
          placeholder="Select Cohorts"
          validate={[required]}
        >
          <option default>Select Cohort(s)</option>
          { props.cohorts.map(option => <option value={option.id}>{option.name}</option>)}
        </Field>
      </Form.Field>
      <Button content="Sign Up" />
    </Form>
  );
};


export default SignupForm;
