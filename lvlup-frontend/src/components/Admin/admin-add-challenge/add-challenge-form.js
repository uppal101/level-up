import React, { Component } from 'react';
import { Form, Container } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { allCampuses, setCampuses } from '../../../actions/adminsignup';
import { addChallenge } from '../../../actions/addChallenge';
import './admin-add-challenge-styles.css';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addChallenge, allCampuses, setCampuses }, dispatch);
}
function mapStateToProps(state, ownProps) {
  return {
    addChallenge: false,
    campuses: state.allCampuses,
  };
}

const categories = [
  { key: 1, text: 'Education', value: 'education' },
  { key: 2, text: 'Community', value: 'community' },
  { key: 3, text: 'Career', value: 'career' },
  { key: 4, text: 'Life', value: 'life' },
];

const required = value => value ? undefined : 'Required';
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const renderField = ({ input, dropdown, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
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

class AddChallengeForm extends Component {
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
        <Form onSubmit={handleSubmit(this.props.addChallenge)}>
          <Form.Group widths="equal">
            <Field
              name="title"
              component={renderField}
              type="text"
              label="Title"
              placeholder="Title"
              validate={[required]}
            />
            <Field
              name="points"
              component={renderField}
              type="number"
              label="Points"
              placeholder="Points"
              validate={[required, number]}
            />
            {/* <Form.Select label="Select Category" options={categories} placeholder="Select Category" /> */}
            <Field
              name="requirement"
              component={renderField}
              type="text"
              label="Requirement"
              placeholder="Requirement"
              validate={[required]}
            />
            <Form.Button>Add Requirement</Form.Button>
          </Form.Group>
          <Form.Field>
            <Field
              name="campuses"
              component={renderSelectField}
              type="text"
              label="Campuses"
              placeholder="Select Campuses"
              validate={[required]}
              multiple
            >
              <option default>Select Campus</option>
              { this.props.campuses.map(option => <option value={option.id}>{option.location}</option>)}
            </Field>

            <Field
              name="category"
              component={renderSelectField}
              type="text"
              label="Select Category"
              placeholder="Select Category"
              validate={required}
            />
            <option default>Select Category</option>
            { categories.map(option => <option value={option.key}>{option.text}</option>)}
          </Form.Field>
          <Field
            name="description"
            component={renderField}
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

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'addChallenge' })(AddChallengeForm));
