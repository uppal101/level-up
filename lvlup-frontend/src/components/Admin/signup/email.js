import React, { Component } from 'react';
import { Form, Button, Loader } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signup, allCohorts, allCampuses, setCohorts, setCampuses } from '../../../actions/admin-signup';
import './signupview.css';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signup, setCampuses, setCohorts, allCampuses, allCohorts }, dispatch);
}
function mapStateToProps(state, ownProps) {
  return {
    signedUp: state.signedUp,
    cohorts: state.allCohorts,
    campuses: state.allCampuses,
  };
}


const required = value => value ? undefined : 'Required';
const minValue = min => value => value && value.length < min ? `Must be at least ${min} characters or more` : undefined;
const minValue7 = minValue(7);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

// const match = (str1, str2) => str1 === str2 ? undefined : 'Passwords do not match';

const renderField = ({ input, dropdown, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
);

const renderSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        {children}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
const renderMultiSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input} multiple>
        {children}
      </select>
      {touched && error && <span>{error}</span>}
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
      return <Loader active inline="centered"> Loading </Loader>;
    }
    const { handleSubmit } = this.props;
    return (
      <Form className="forms" onSubmit={handleSubmit(this.props.signup)}>

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
            { this.props.campuses.map(option => <option value={option.id}>{option.location}</option>)}
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
            { this.props.cohorts.map(option => <option value={option.id}>{option.name}</option>)}
          </Field>
        </Form.Field>
        <Button content="Sign Up" />
      </Form>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signup' })(SignupForm));
