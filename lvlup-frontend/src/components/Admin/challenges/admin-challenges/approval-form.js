import React from 'react';
import { Form, Grid } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { renderField, renderSelectField } from '../../helpers/render-fields';
import { required } from '../../helpers/validations';

const SubmissionApprovalForm = ({ selectedChallenge, submissionFormAdmin, handleSubmit }) => {
  const submit = (values) => {
    submissionFormAdmin(selectedChallenge.id, values);
  };
  return (
    <div id="approval-form">
      <Form onSubmit={handleSubmit(submit)}>
        <Grid centered>
          <Grid.Row>
            <Form.Field centered width={12}>
              <Field
                id="evaluation-message"
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
};


export default SubmissionApprovalForm;
