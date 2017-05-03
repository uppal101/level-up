import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { allCohorts } from '../../../actions/admin-signup';
import { signupStudent } from '../../../actions/student-signup';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './student-styles.css';

const required = value => value ? undefined : 'Required';

const mapDispatchToProps = dispatch => bindActionCreators({ allCohorts, signupStudent }, dispatch);

const mapStateToProps = state => ({
  cohorts: state.allCohorts,
});

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

const renderField = ({ input, dropdown, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
);

class SignupInfo extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  componentWillMount() {
    this.props.allCohorts();
  }

  submit(values) {
    this.props.signupStudent(values);
  }

  render() {
    const { handleSubmit } = this.props;
    if (this.props.cohorts.length === 0) {
      return (<div>LOADING</div>);
    }
    return (
      <Form onSubmit={handleSubmit(this.submit)}>
        <Form.Field inline>
          <Field
            name="username"
            component={renderField}
            type="text"
            label="username"
            placeholder="Enter your username"
            validate={[required]}
          />
        </Form.Field>
        <Form.Field inline>
          <Field
            name="cohort_id"
            component={renderSelectField}
            type="text"
            label="Select Your Cohort"
            placeholder="Select Cohort"
            validate={[required]}
          >
            <option default>Select Cohort</option>
            { this.props.cohorts.map(option => <option value={option.id}>{option.name}</option>)}
          </Field>
        </Form.Field>
        <Form.Button>Sign Up</Form.Button>
      </Form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'studentSignup' })(SignupInfo));
