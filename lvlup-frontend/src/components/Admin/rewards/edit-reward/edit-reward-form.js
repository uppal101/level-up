import React, { Component } from 'react';
import { Form, Container, Segment, Loader } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { allCampuses  } from '../../../../actions/admin-signup';
import { editReward } from '../../../../actions/edit-reward';
import { renderField, renderTextAreaField, renderSelectField, categories } from '../../helpers/render-fields';
import { required, number } from '../../helpers/validations';
import './edit-reward-styles.css';

class EditRewardForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    values.reward_id = this.props.reward.id;
    this.props.editReward(values);
  }

  componentDidMount() {
    this.props.allCampuses();
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
                  placeholder="Describe reward..."
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

EditRewardForm = reduxForm({
  form: 'editReward',
})(EditRewardForm);

// Prepopulate form with data from state
EditRewardForm = connect(
  state => ({
    campuses: state.allCampuses,
    reward: state.selectedReward,
    initialValues: {
      name: state.selectedReward.name,
      point_cost: state.selectedReward.point_cost,
      campus_id: state.selectedReward.campus_id,
      category_id: state.selectedReward.category_id,
      description: state.selectedReward.description,
    },
  }), { editReward, allCampuses },
)(EditRewardForm);

export default EditRewardForm;
