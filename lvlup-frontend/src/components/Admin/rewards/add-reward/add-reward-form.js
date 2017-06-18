import React from 'react';
import { Form, Container, Segment, Loader, Grid } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { renderField, renderTextAreaField, renderSelectField, categories } from '../../helpers/render-fields';
import { required, number } from '../../helpers/validations';
import './add-reward-styles.css';

const AddRewardForm = (props) => {
  if (props.campuses.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  const { handleSubmit } = props;
  return (
    <Container>
      <Segment inverted>
        <Form onSubmit={handleSubmit(props.addReward)}>
          <Form.Group>
            <Form.Field width={12}>
              <Field
                name="name"
                component={renderField}
                type="text"
                label="Name"
                placeholder="Name"
                validate={[required]}
              />
            </Form.Field>
            <Form.Field width={4}>
              <Field
                name="point_cost"
                component={renderField}
                type="number"
                label="Point Cost"
                placeholder="Point Cost"
                validate={[required, number]}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
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
                { props.campuses.map(option => <option key={option.id} value={option.id}>{option.location}</option>)}
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
                placeholder="Describe reward..."
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

export default AddRewardForm;
