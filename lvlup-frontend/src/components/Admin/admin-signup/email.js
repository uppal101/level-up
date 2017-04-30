import React, { Component } from 'react';
import { Form, Input, Dropdown, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signup } from '../../../actions/adminsignup';
import './signupview.css';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signup }, dispatch);
}
function mapStateToProps(dispatch) {
  return {
    signedUp: false,
  };
}

const cohorts = [
  { key: '42', text: 'G42', value: 'g42' },
  { key: '52', text: 'G52', value: 'g52' },
];

class SignupForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form className="forms" onSubmit={handleSubmit(this.props.signup)}>
        <Form.Field inline>
          <label>Galvanize Email</label>
          <Field name="email" component="input" type="email" placeholder="Email" />
        </Form.Field>
        <Form.Field inline>
          <label>Password</label>
          <Field name="password" component="input" type="password" placeholder="Password" />
        </Form.Field>
        <Form.Field inline>
          <label>Confirm Password</label>
          <Field name="confirm-password" component="input" type="password" placeholder="Confirm Password" />
        </Form.Field>
        <Form.Field inline>
          <label>Cohorts</label>
          <Dropdown placeholder="Cohorts" multiple selection options={cohorts} />
          <Field name="cohorts" component="dropdwon" type="text" placeholder="Select Cohorts" />
        </Form.Field>
        <Button content="Sign Up" />
      </Form>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signup' })(SignupForm));
