import React, { Component } from 'react';
import { Form, Container } from 'semantic-ui-react';
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
      <input {...input} placeholder={label} type={type} />
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
        <Form onSubmit={handleSubmit(this.submit)}>
          <Form.Group widths="equal" >
            <Field
              name="name"
              component={renderField}
              type="text"
              label="Name"
              placeholder="Name"
              validate={[required]}
            />
            <Field
              name="point_value"
              component={renderField}
              type="number"
              label="Point Value"
              placeholder="Point Value"
              validate={[required, number]}
            />
            <Field
              name="requirements_1"
              component={renderField}
              type="text"
              label="Requirement 1"
              placeholder="Requirement"
            />
            <Field
              name="requirements_2"
              component={renderField}
              type="text"
              label="Requirement 2"
              placeholder="Requirement"
            />
            <Field
              name="requirements_3"
              component={renderField}
              type="text"
              label="Requirement 3"
              placeholder="Requirement"
            />
            <Field
              name="requirements_4"
              component={renderField}
              type="text"
              label="Requirement 4"
              placeholder="Requirement"
            />
            <Field
              name="requirements_5"
              component={renderField}
              type="text"
              label="Requirement 5"
              placeholder="Requirement"
            />

          </Form.Group>
          <Form.Field>
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
          <Field
            name="description"
            component={renderTextAreaField}
            type="text"
            label="Description"
            placeholder="Describe challenge..."
            validate={[required]}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
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
      requirement_1: state.selectedChallenge.requirement_1 ? state.selectedChallenge.requirement_1 : '',
      requirement_2: state.selectedChallenge.requirement_2 ? state.selectedChallenge.requirement_2 : '',
      requirement_3: state.selectedChallenge.requirement_3 ? state.selectedChallenge.requirement_3 : '',
      requirement_4: state.selectedChallenge.requirement_4 ? state.selectedChallenge.requirement_4 : '',
      requirement_5: state.selectedChallenge.requirement_5 ? state.selectedChallenge.requirement_5 : '',
    },
  }), { editChallenge, allCampuses, setCampuses },
)(EditChallengeForm);

export default EditChallengeForm;
