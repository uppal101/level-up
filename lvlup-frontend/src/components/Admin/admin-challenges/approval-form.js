import { Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submissionFormAdmin } from '../../../actions/challenge-review';
import { renderField, renderSelectField } from '../admin-common/render-fields';
import { required } from '../admin-common/validations';

const mapDispatchToProps = dispatch => bindActionCreators({ submissionFormAdmin }, dispatch);

const mapStateToProps = state => ({
  selectedChallenge: state.selectedChallenge,
});


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
      <Form onSubmit={handleSubmit(this.submit)}>
        <Form.Field inline>
          <Field
            name="evaluation_message"
            component={renderField}
            type="text"
            label="Evaluation Message"
            placeholder="Evaluation Message"
            validate={[required]}
          />
        </Form.Field>
        <Form.Field inline>
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
        <Form.Button>Login</Form.Button>
      </Form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'submissionApproval',
})(SubmissionApprovalForm));
