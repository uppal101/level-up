import React, { Component } from 'react';
import { Form, Loader, Container, Segment } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { renderField, renderSelectField } from '../../Admin/helpers/render-fields';
import { required } from '../../Admin/helpers/validations';
import '../nav/sidenav-styles.css';

class SignupInfo extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    this.props.signupStudent(values);
  }

  render() {
    const { handleSubmit } = this.props;
    if (this.props.cohorts.length === 0) {
      return <Loader active inline="centered"> Loading </Loader>;
    }
    return (
      <div className="signupPage">
        <Container>
          <h2 className="signupText">{`Welcome, ${this.props.studentLoginInfo.name}`}</h2>
          <p className="signupText">Please complete the form below to get started!</p>
          <Segment inverted>
            <Form onSubmit={handleSubmit(this.submit)}>
              <Form.Field width={16}>
                <Field
                  name="username"
                  component={renderField}
                  type="text"
                  label="Username"
                  placeholder="Enter your username"
                  validate={[required]}
                />
              </Form.Field>
              <Form.Group>
                <Form.Field width={8}>
                  <Field
                    name="email"
                    component={renderField}
                    type="text"
                    label="Email"
                    placeholder="Enter your email"
                    validate={[required]}
                  />
                </Form.Field>
                <Form.Field width={8}>
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
              </Form.Group>
              <Form.Button basic color="orange">Sign Up</Form.Button>
            </Form>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default SignupInfo;
