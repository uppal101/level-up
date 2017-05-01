import React, { Component } from 'react';
import { Form, Dropdown, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signup, allCohorts, allCampuses, setCohorts, setCampuses } from '../../../actions/adminsignup';
import './signupview.css';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signup, setCampuses, setCohorts, allCampuses, allCohorts }, dispatch);
}
function mapStateToProps(state, ownProps) {
  return {
    signedUp: false,
    cohorts: state.cohorts,
    campuses: state.campuses,
  };
}
const campusesDropDown = campuses => campuses.map((campus) => {
  const obj = {};
  obj.value = campus.id;
  obj.text = campus.location;
  return obj;
});
const cohortsDropDown = cohorts => cohorts.map((cohort) => {
  const obj = {};
  obj.value = cohort.id;
  obj.text = cohort.name;
  return obj;
});

const required = value => value ? undefined : 'Required';
const minValue = min => value => value && value.length < min ? `Must be at least ${min} characters or more` : undefined;
const minValue7 = minValue(7);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

const renderField = ({ input, dropdown, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
    <div>
      <dropdown {...dropdown} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
);

class SignupForm extends Component {
  componentWillMount() {
    this.props.allCampuses();
    this.props.allCohorts();
  }
  render() {
    if (this.props.cohorts.length === 0 && this.props.campuses.length === 0) {
      return <div>LOADING</div>;
    }
    const { handleSubmit } = this.props;
    return (
      <Form className="forms" onSubmit={handleSubmit(this.props.signup)}>

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
          <label>Password</label>
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
          <label>Confirm Password</label>
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
          <label>Campuses</label>
          <Dropdown
            placeholder="Campuses" multiple selection
            options={campusesDropDown(this.props.campuses)}
            onChange={(event, result) => {
              const { value } = result;
              this.props.setCampuses(value);
            }}
          />
          <Field
            name="campuses"
            component={renderField}
            type="text"
            label="Campuses"
            placeholder="Select Campuses"
            validate={[required]}
          />
        </Form.Field>

        <Form.Field inline>
          <label>Cohorts</label>
          <Dropdown
            placeholder="Cohorts" multiple selection options={cohortsDropDown(this.props.cohorts)}
            onChange={(event, result) => {
              const { value } = result;
              this.props.setCohorts(value);
            }}
          />
          <Field
            name="cohorts"
            component={renderField}
            type="text"
            label="Cohorts"
            placeholder="Select Cohorts"
            validate={[required]}
          />
        </Form.Field>
        <Button content="Sign Up" />
      </Form>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signup' })(SignupForm));
