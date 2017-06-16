import React from 'react';
import { Form, Segment, Container, Loader } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { required, minValue7 } from '../../Admin/helpers/validations';
import './submission-styles.css';
import { renderField, renderTextAreaField } from '../../Admin/helpers/render-fields';

const upload = 'uploadcare-uploader';

const ChallengeSubmissionForm = ({ studentLoginInfo, selectedChallenge, challengeSubmission, handleSubmit }) => {
  const submit = (values) => {
    values.student_id = studentLoginInfo.id;
    values.challenge_id = selectedChallenge.id;
    values.cohort_id = studentLoginInfo.cohort_id;
    values.category_id = selectedChallenge.category_id;
    challengeSubmission(values);
  };
  if (!selectedChallenge.name) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <div className="submission-container">
      <Container>
        <div className="challenge-submission">
          <h2 className="header">{`Challenge Submission: ${selectedChallenge.name}`}</h2>
          <Segment inverted>
            <Form className="challenge-submission-form" onSubmit={handleSubmit(submit)}>
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
                <input type="text" name="submission_image_link_1" role={upload} />
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
                <input type="text" name="submission_image_link_2" role={upload} />
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
                <input type="text" name="submission_image_link_3" role={upload} />
              </div>
              <Form.Button basic color="orange" floated="right">lvl^</Form.Button>
            </Form>
          </Segment>
        </div>
      </Container>
    </div>
  );
};

export default ChallengeSubmissionForm;
