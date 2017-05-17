import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../../actions/admin-login';
import './loginview.css';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}
function mapStateToProps(state) {
  return {
    loggedIn: false,
  };
}

const required = value => value ? undefined : 'Required';
const minValue = min => value => value && value.length < min ? `Must be at least ${min} characters or more` : undefined;
const minValue7 = minValue(7);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
);

class LoginForm extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form className="email" onSubmit={handleSubmit(this.props.login)}>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'login',
})(LoginForm));
