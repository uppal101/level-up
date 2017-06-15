import React, { Component } from 'react';
import { Form, Container, Segment, Loader } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { renderField, renderTextAreaField, renderSelectField, categories } from '../../helpers/render-fields';
import { required, number } from '../../helpers/validations';
import './edit-challenge-styles.css';

class EditChallengeForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    values.challenge_id = this.props.challenge.id;
    this.props.editChallenge(values);
  }

  render() {
    if (this.props.campuses.length === 0) {
      return <Loader active inline="centered"> Loading </Loader>;
    }
    const { handleSubmit } = this.props;
    return (
      <Container>
        <Segment inverted>
          <Form onSubmit={handleSubmit(this.submit)}>
            <Form.Group>
              <Form.Field width={14}>
                <Field
                  name="name"
                  component={renderField}
                  type="text"
                  label="Name"
                  placeholder="Name"
                  validate={[required]}
                />
              </Form.Field>
              <Form.Field width={2}>
                <Field
                  name="point_value"
                  component={renderField}
                  type="number"
                  label="Point Value"
                  placeholder="Point Value"
                  validate={[required, number]}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field width={16}>
                <Field
                  name="requirements_1"
                  component={renderField}
                  type="text"
                  label="Requirement 1"
                  placeholder="Requirement"
                />
              </Form.Field>
              <Form.Field width={16}>
                <Field
                  name="requirements_2"
                  component={renderField}
                  type="text"
                  label="Requirement 2"
                  placeholder="Requirement"
                />
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field width={16}>
                <Field
                  name="requirements_3"
                  component={renderField}
                  type="text"
                  label="Requirement 3"
                  placeholder="Requirement"
                />
              </Form.Field>
              <Form.Field width={16}>
                <Field
                  name="requirements_4"
                  component={renderField}
                  type="text"
                  label="Requirement 4"
                  placeholder="Requirement"
                />
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field width={16}>
                <Field
                  name="requirements_5"
                  component={renderField}
                  type="text"
                  label="Requirement 5"
                  placeholder="Requirement"
                />
              </Form.Field>
              <Form.Field width={8}>
                <Field
                  name="campus_id"
                  component={renderSelectField}
                  type="text"
                  label="Campus"
                  placeholder="Select Campus"
                  validate={[required]}
                  multiple
                >
                  <option default>Select Campus</option>
                  { this.props.campuses.map(option => <option key={option.id} value={option.id}>{option.location}</option>)}
                </Field>
              </Form.Field>
              <Form.Field width={8}>
                <Field
                  name="category_id"
                  component={renderSelectField}
                  type="text"
                  label="Select Category"
                  placeholder="Select Category"
                  validate={required}
                >
                  <option default>Select Category</option>
                  { categories.map(option => <option key={option.key} value={option.value}>{option.text}</option>)}
                </Field>
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field width={16}>
                <Field
                  name="description"
                  component={renderTextAreaField}
                  type="text"
                  label="Description"
                  placeholder="Describe challenge..."
                  validate={[required]}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Button basic color="orange">Submit</Form.Button>
            </Form.Group>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default EditChallengeForm;
