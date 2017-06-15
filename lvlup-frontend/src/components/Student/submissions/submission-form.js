import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Container, Loader } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import uploadcare from 'uploadcare-widget';
import { challengeSubmission } from '../../../actions/student-challenges-actions';
import { required, minValue7 } from '../../Admin/helpers/validations';
import './submission-styles.css';
import { renderField, renderTextAreaField } from '../../Admin/helpers/render-fields';


const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  selectedChallenge: state.selectedChallenge,
});

const mapDispatchToProps = dispatch => bindActionCreators({ challengeSubmission }, dispatch);


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
      return <Loader active inline="centered"> Loading </Loader>;
    }
    return (
      <div className="submission-container">
        <Container>
          <div className="challenge-submission">
            <h2 className="header">{`Challenge Submission: ${this.props.selectedChallenge.name}`}</h2>
            <Segment inverted>
              <Form className="challenge-submission-form" onSubmit={handleSubmit(this.submit)}>
                <Form.Field inline>
                  <Field
                    name="submission_message"
                    component={renderTextAreaField}
                    type="text"
                    label="Submission Message"
                    placeholder="Enter Submission Message"
                    validate={[required, minValue7]}
                  />
                </Form.Field>
                <Form.Field inline>
                  <Field
                    name="submission_attachment_1"
                    component={renderField}
                    type="text"
                    label="Attachment Link 1"
                    placeholder="Please add your attachment here"
                  />
                </Form.Field>
                <Form.Field inline>
                  <Field
                    name="submission_attachment_2"
                    component={renderField}
                    type="text"
                    label="Attachment Link 2"
                    placeholder="Please add your attachment here"
                  />
                </Form.Field>
                <Form.Field inline>
                  <Field
                    name="submission_attachment_3"
                    component={renderField}
                    type="text"
                    label="Attachment Link 3"
                    placeholder="Please add your attachment here"
                  />
                </Form.Field>
                <Form.Field inline id="submit-image">
                  <Field
                    name="submission_image_link_1"
                    component={renderField}
                    type="text"
                    label="Submission Image 1"
                    placeholder="Please choose a file below and copy link here"
                  />
                </Form.Field>
                <div>
                  <input type="text" name="submission_image_link_1" role="uploadcare-uploader" />
                </div>
                <Form.Field inline id="submit-image">
                  <Field
                    name="submission_image_link_2"
                    component={renderField}
                    type="text"
                    label="Submission Image 2"
                    placeholder="Please choose a file below and copy link here"
                  />
                </Form.Field>
                <div>
                  <input type="text" name="submission_image_link_2" role="uploadcare-uploader" />
                </div>
                <Form.Field inline id="submit-image">
                  <Field
                    name="submission_image_link_3"
                    component={renderField}
                    type="text"
                    label="Submission Image 3"
                    placeholder="Please choose a file below and copy link here"
                  />
                </Form.Field>
                <div>
                  <input type="text" name="submission_image_link_3" role="uploadcare-uploader" />
                </div>
                <Form.Button basic color="orange" floated="right">lvl^</Form.Button>
              </Form>
            </Segment>
          </div>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'submission' })(ChallengeSubmissionForm));
