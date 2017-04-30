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
const campuses = [
  { key: 'sf', text: 'San Francisco', value: 'San Francisco' },
  { key: 'a', text: 'Austin', value: 'Austin' },
  { key: 'b', text: 'Boulder', value: 'Boulder' },
  { key: 'dp', text: 'Denver-Platte', value: 'Denver-Platte' },
  { key: 'dgt', text: 'Denver-Golden Triangle', value: 'Denver-Golden Triangle' },
  { key: 'ny', text: 'New York', value: 'New York' },
  { key: 'p', text: 'Phoenix', value: 'Seattle' },
  { key: 'all', text: 'All campuses', value: 'All Campuses' },
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
          <label>Username</label>
          <Field name="username" component="input" type="text" placeholder="Username" />
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
          <label>Campuses</label>
          <Dropdown placeholder="Campuses" multiple selection options={campuses} />
          <Field name="campuses" component="dropdown" type="text" placeholder="Select Campuses" />
        </Form.Field>
        <Form.Field inline>
          <label>Cohorts</label>
          <Dropdown placeholder="Cohorts" multiple selection options={cohorts} />
          <Field name="cohorts" component="dropdown" type="text" placeholder="Select Cohorts" />
        </Form.Field>
        <Button content="Sign Up" />
      </Form>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signup' })(SignupForm));
