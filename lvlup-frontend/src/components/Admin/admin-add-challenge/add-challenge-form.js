import React, { Component } from 'react';
import { Form, Container } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { allCampuses } from '../../../actions/adminsignup';
import { addChallenge } from '../../../actions/addChallenge';
import './admin-add-challenge-styles.css';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addChallenge, allCampuses }, dispatch);
}
function mapStateToProps(state, ownProps) {
  return {
    addChallenge: false,
    campuses: state.allCampuses,
  };
}
const categories = [
  { key: 'e', text: 'Education', value: 'education' },
  { key: 'co', text: 'Community', value: 'community' },
  { key: 'c', text: 'Career', value: 'career' },
  { key: 'l', text: 'Life', value: 'life' },
];
//
// const campuses = [
//   { key: 'sf', text: 'San Francisco', value: 'San Francisco' },
//   { key: 'a', text: 'Austin', value: 'Austin' },
//   { key: 'b', text: 'Boulder', value: 'Boulder' },
//   { key: 'dp', text: 'Denver-Platte', value: 'Denver-Platte' },
//   { key: 'dgt', text: 'Denver-Golden Triangle', value: 'Denver-Golden Triangle' },
//   { key: 'ny', text: 'New York', value: 'New York' },
//   { key: 'p', text: 'Phoenix', value: 'Seattle' },
//   { key: 'all', text: 'All campuses', value: 'All Campuses' },
// ];
const required = value => value ? undefined : 'Required';

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
    console.log(this.props.campuses);
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
              component="input"
              type="text"
              label="Title"
              placeholder="Title"
            />
            <Form.Input label="Title" placeholder="Title" />
            <Form.Input label="Points" placeholder="Points" />
            <Field
              name="points"
              component="input"
              type="number"
              label="Points"
              placeholder="Points"
            />
            <Form.Select label="Select Category" options={categories} placeholder="Select Category" />
            <Field
              name="category"
              component="dropdown"
              type="text"
              label="Select Category"
              placeholder="Select Category"
            />
            {/* <Form.Select label="Select Campus" options={campuses} placeholder="Select Campus" /> */}
            <Field
              name="campuses"
              component="dropdown"
              type="text"
              label="Select Campus"
              placeholder="Select Campus"
            />
          </Form.Group>
          <Form.Field>
            <label>Requirement</label>
            <input placeholder="Requirement" />
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
          </Form.Field>
          <Form.Button>Add Requirement</Form.Button>
          <Form.TextArea label="Description" placeholder="Describe challenge" />
          <Field
            name="description"
            component="input"
            type="text"
            label="Description"
            placeholder="Describe challenge..."
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'addChallenge' })(AddChallengeForm));
