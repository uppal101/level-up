import React, { Component } from 'react';
import { Form, Container, Segment, Loader } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { allCampuses, setCampuses } from '../../../../actions/admin-signup';
import { addReward } from '../../../../actions/add-reward';
import { renderField, renderTextAreaField, renderSelectField, categories } from '../../admin-common/render-fields';
import { required, number } from '../../admin-common/validations';
import './add-reward-styles.css';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addReward, allCampuses, setCampuses }, dispatch);
}
function mapStateToProps(state) {
  return {
    addReward: false,
    campuses: state.allCampuses,
  };
}

class AddRewardForm extends Component {
  componentWillMount() {
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
          <Form onSubmit={handleSubmit(this.props.addReward)}>
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

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'addReward' })(AddRewardForm));
