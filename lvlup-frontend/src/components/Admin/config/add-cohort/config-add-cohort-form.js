import React, { Component } from 'react';
import { Form, Loader, Container, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { renderField, renderSelectField } from '../../helpers/render-fields';
import { required } from '../../helpers/validations';
import { allCampuses } from '../../../../actions/admin-signup';
import { addCohort } from '../../../../actions/admin-config';

function mapStateToProps(state, ownProps) {
  return {
    campuses: state.allCampuses,
    addedCohort: state.addedCohort,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ allCampuses, addCohort }, dispatch);
}

class AddACohortForm extends Component {
  componentWillMount() {
    this.props.allCampuses();
  }
  render() {
    if (this.props.campuses.length === 0) {
      return <Loader active inline="centered"> Loading </Loader>;
    }
    const { handleSubmit } = this.props;
    return (
      <div className="addACohort">
        <Container>
          <h2 className="addCohortHeader"> Add a Cohort </h2>
          <Segment inverted>
            <Form onSubmit={handleSubmit(this.props.addCohort)}>
              <Form.Field inline>
                <Field
                  name="name"
                  component={renderField}
                  type="text"
                  label=" Enter Cohort Name"
                  placeholder="Cohort Name"
                  validate={[required]}
                />
              </Form.Field>
              <Form.Field inline>
                <Field
                  name="type"
                  component={renderSelectField}
                  type="text"
                  label="Type of Cohort"
                  placeholder="Select Type"
                  validate={[required]}
                >
                  <option default>Select Type Of Cohort</option>
                  <option value="WDI">Web Development Immersive</option>
                  <option value="DSI">Data Science Immersive</option>
                </Field>
              </Form.Field>
              <Form.Field inline>
                <Field
                  name="campuses"
                  component={renderSelectField}
                  type="text"
                  label="Campus"
                  placeholder="Select Campus"
                  validate={[required]}
                >
                  <option default>Select Campus</option>
                  { this.props.campuses.map(option => <option value={option.id}>{option.location}</option>)}
                </Field>
              </Form.Field>
              <Form.Field inline>
                <Field
                  name="q1_start_date"
                  component={renderField}
                  type="date"
                  label="Enter the Q1 Start Date"
                  placeholder="Enter Date"
                  validate={[required]}
                />
              </Form.Field>
              <Form.Field inline>
                <Field
                  name="q2_start_date"
                  component={renderField}
                  type="date"
                  label="Enter the Q2 Start Date"
                  placeholder="Enter Date"
                  validate={[required]}
                />
              </Form.Field>
              <Form.Field inline>
                <Field
                  name="q3_start_date"
                  component={renderField}
                  type="date"
                  label="Enter the Q3 Start Date"
                  placeholder="Enter Date"
                  validate={[required]}
                />
              </Form.Field>
              <Form.Field inline>
                <Field
                  name="q4_start_date"
                  component={renderField}
                  type="date"
                  label="Enter the Q4 Start Date"
                  placeholder="Enter Date"
                  validate={[required]}
                />
              </Form.Field>
              <Form.Field inline>
                <Field
                  name="graduation_date"
                  component={renderField}
                  type="date"
                  label="Enter the Graduation Date"
                  placeholder="Enter Date"
                  validate={[required]}
                />
              </Form.Field>
              <Form.Button basic color="orange">Add a Cohort</Form.Button>
            </Form>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'addCohort' })(AddACohortForm));
