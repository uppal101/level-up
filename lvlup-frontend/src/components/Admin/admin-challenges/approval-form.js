import { Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submissionFormAdmin } from '../../../actions/challenge-review';

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

const required = value => value ? undefined : 'Required';

class SubmissionApprovalForm extends Component {
  constuctor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    console.log(values);
    // this.props.submissionFormAdmin(id, values)
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form className="email" onSubmit={handleSubmit(this.submit)}>
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
            <option value={'Approved'}>{Approved}</option>
            <option value={'Pending approval'}>{Approved}</option>
            <option value={'Denied'}>{Approved}</option>

          </Field>
        </Form.Field>
        <Form.Button>Login</Form.Button>
      </Form>
    );
  }
}

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'submissionApproval',
})(SubmissionApprovalForm));
