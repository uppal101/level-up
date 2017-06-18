import React from 'react';
import { Form, Container, Segment, Loader, Grid } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { renderField, renderTextAreaField, renderSelectField, categories } from '../../helpers/render-fields';
import { required, number } from '../../helpers/validations';
import './edit-challenge-styles.css';

const EditChallengeForm = ({ handleSubmit, campuses, challenge, editChallenge }) => {
  const submit = (values) => {
    values.challenge_id = challenge.id;
    editChallenge(values);
  };
  if (campuses.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <Container>
      <Segment inverted>
        <Form onSubmit={handleSubmit(submit)}>
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
                { campuses.map(option => <option key={option.id} value={option.id}>{option.location}</option>)}
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
          <Grid centered>
            <Grid.Row>
              <Form.Button basic color="orange">Submit</Form.Button>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    </Container>
  );
};

export default EditChallengeForm;
