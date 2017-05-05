import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { challengeSubmission } from '../../../actions/student-challenges-actions';
import './challenge-submission-style.css';
import uploadcare from 'uploadcare-widget';

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  selectedChallenge: state.selectedChallenge,
});

const mapDispatchToProps = dispatch => bindActionCreators({ challengeSubmission }, dispatch);

const required = value => value ? undefined : 'Required';
const minValue = min => value => value && value.length < min ? `Must be at least ${min} characters or more` : undefined;
const minValue7 = minValue(7);

class ChallengeSubmissionForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    uploadcare.start({
      publicKey: '1c7b669f9c1e6b59ad80',
      tabs: 'all',
    });
  }

  submit(values) {
    values.student_id = this.props.loginInfo.id;
    values.challenge_id = this.props.selectedChallenge.id;
    values.cohort_id = this.props.loginInfo.cohort_id;
    values.category_id = this.props.selectedChallenge.category_id;
    this.props.challengeSubmission(values);
  }

  render() {
    const { handleSubmit } = this.props;
    if (!this.props.selectedChallenge.name) {
      return (<div>LOADING</div>);
    }
    return (
      <div className="challenge-submission">
        <h2 className="header">{`Challenge Submission: ${this.props.selectedChallenge.name}`}</h2>
        <Form className="challenge-submission-form" onSubmit={handleSubmit(this.submit)}>
          <Form.Field inline>
            <Field
              name="submission_message"
              component="textarea"
              type="text"
              label="Submission Message"
              placeholder="Enter Submission Message"
              validate={[required, minValue7]}
            />
          </Form.Field>
          <Form.Field inline>
            <Field
              name="submission_attachment_1"
              component="input"
              type="text"
              label="Attachment Link 1"
              placeholder="Attachment 1"
            />
          </Form.Field>
          <Form.Field inline>
            <Field
              name="submission_attachment_2"
              component="input"
              type="text"
              label="Attachment Link 2"
              placeholder="Attachment 2"
            />
          </Form.Field>
          <Form.Field inline>
            <Field
              name="submission_attachment_3"
              component="input"
              type="text"
              label="Attachment Link 3"
              placeholder="Attachment 3"
            />
          </Form.Field>
          <div>
            <input type="text" name="submission_image_link_1" role="uploadcare-uploader" />
          </div>
          <Form.Field inline>
            <Field
              name="submission_image_link_1"
              component="input"
              type="text"
              label="Submission Image 1"
              placeholder="Please copy link above here"
            />
          </Form.Field>
          <div>
            <input type="text" name="submission_image_link_2" role="uploadcare-uploader" />
          </div>
          <Form.Field inline>
            <Field
              name="submission_image_link_2"
              component="input"
              type="text"
              label="Submission Image 2"
              placeholder="Please copy link above here"
            />
          </Form.Field>
          <div>
            <input type="text" name="submission_image_link_3" role="uploadcare-uploader" />
          </div>
          <Form.Field inline>
            <Field
              name="submission_image_link_3"
              component="input"
              type="text"
              label="Submission Image 3"
              placeholder="Please copy link above here"
            />
          </Form.Field>
          <Form.Button>lvl^</Form.Button>
        </Form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'submission' })(ChallengeSubmissionForm));
