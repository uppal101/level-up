import { Form, Grid } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submissionFormAdmin } from '../../../../actions/challenge-review';

const mapDispatchToProps = dispatch => bindActionCreators({ submissionFormAdmin }, dispatch);

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

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
);

const mapStateToProps = state => ({
  selectedChallenge: state.selectedChallenge,
});

const required = value => value ? undefined : 'Required';

class SubmissionApprovalForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    this.props.submissionFormAdmin(this.props.selectedChallenge.id, values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div id="approval-form">
        <Form onSubmit={handleSubmit(this.submit)}>
          <Grid centered>
            <Grid.Row>
              <Form.Field centered width={12}>
                <Field
                  name="evaluation_message"
                  component={renderField}
                  type="text"
                  label="Evaluation Message"
                  placeholder="Evaluation Message"
                  validate={[required]}
                />
              </Form.Field>
            </Grid.Row>
          </Grid>
          <Grid centered>
            <Grid.Row>
              <Form.Field centered inline width={4}>
                <Field
                  name="submission_status"
                  component={renderSelectField}
                  type="text"
                  label="Select Approval Status"
                  placeholder="Select Approval Status"
                  validate={[required]}
                >
                  <option default>Select Status</option>
                  <option value={'Approved'}>Approved</option>
                  <option value={'Pending approval'}>Pending Approval</option>
                  <option value={'Denied'}>Denied</option>

                </Field>
              </Form.Field>
            </Grid.Row>
          </Grid>
          <Grid centered>
            <Grid.Row>

              <Form.Button basic color="orange">Submit Review</Form.Button>
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'submissionApproval',
})(SubmissionApprovalForm));
