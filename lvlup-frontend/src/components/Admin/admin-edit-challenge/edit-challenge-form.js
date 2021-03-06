import React, { Component } from 'react';
import { Form, Container, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { allCampuses, setCampuses } from '../../../actions/admin-signup';
import { editChallenge } from '../../../actions/edit-challenge';
import './admin-edit-challenge-styles.css';

const categories = [
  { key: 'Education', text: 'Education', value: '1' },
  { key: 'Community', text: 'Community', value: '2' },
  { key: 'Career', text: 'Career', value: '3' },
  { key: 'Life', text: 'Life', value: '4' },
];
const required = value => value ? undefined : 'Required';
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <Form.Input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
);

const renderTextAreaField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
);

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


class EditChallengeForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    values.challenge_id = this.props.challenge.id;
    this.props.editChallenge(values);
  }
  componentWillMount() {
    this.props.allCampuses();
  }
  render() {
    if (this.props.campuses.length === 0) {
      return <div>LOADING</div>;
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

EditChallengeForm = reduxForm({
  form: 'editChallenge',
})(EditChallengeForm);

EditChallengeForm = connect(
  state => ({
    campuses: state.allCampuses,
    challenge: state.selectedChallenge,
    initialValues: {
      id: state.selectedChallenge.id,
      name: state.selectedChallenge.name,
      point_value: state.selectedChallenge.point_value,
      campus_id: state.selectedChallenge.campus_id,
      category_id: state.selectedChallenge.category_id,
      description: state.selectedChallenge.description,
      requirements_1: state.selectedChallenge.requirements_1 ? state.selectedChallenge.requirements_1 : '',
      requirements_2: state.selectedChallenge.requirements_2 ? state.selectedChallenge.requirements_2 : '',
      requirements_3: state.selectedChallenge.requirements_3 ? state.selectedChallenge.requirements_3 : '',
      requirements_4: state.selectedChallenge.requirements_4 ? state.selectedChallenge.requirements_4 : '',
      requirements_5: state.selectedChallenge.requirements_5 ? state.selectedChallenge.requirements_5 : '',
    },
  }), { editChallenge, allCampuses, setCampuses },
)(EditChallengeForm);

export default EditChallengeForm;
