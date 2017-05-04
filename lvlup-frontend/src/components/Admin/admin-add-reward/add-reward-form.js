import React, { Component } from 'react';
import { Form, Container } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { allCampuses, setCampuses } from '../../../actions/admin-signup';
import { addReward } from '../../../actions/add-reward';
import './admin-add-reward-styles.css';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addReward, allCampuses, setCampuses }, dispatch);
}
function mapStateToProps(state, ownProps) {
  return {
    addReward: false,
    campuses: state.allCampuses,
  };
}
const categories = [
  { key: '1', text: 'Education', value: '1' },
  { key: '2', text: 'Community', value: '2' },
  { key: '3', text: 'Career', value: '3' },
  { key: '4', text: 'Life', value: '4' },
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

class AddRewardForm extends Component {
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
        <Form onSubmit={handleSubmit(this.props.addReward)}>
          <Form.Group widths="equal">
            <Field
              name="name"
              component={renderField}
              type="text"
              label="Name"
              placeholder="Name"
              validate={[required]}
            />
            <Field
              name="point_cost"
              component={renderField}
              type="number"
              label="Point Value"
              placeholder="Point Value"
              validate={[required, number]}
            />
            <Field
              name="campus_id"
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
              name="category_id"
              component={renderSelectField}
              type="text"
              label="Select Category"
              placeholder="Select Category"
              validate={required}
            >
              <option default>Select Category</option>
              { categories.map(option => <option value={option.key}>{option.text}</option>)}
            </Field>
          </Form.Group>
          <Field
            name="description"
            component={renderTextAreaField}
            type="text"
            label="Description"
            placeholder="Describe reward..."
            validate={[required]}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'addReward' })(AddRewardForm));
