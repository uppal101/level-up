import React, { Component } from 'react';
import { Form, Container } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import { allCampuses, setCampuses } from '../../../actions/admin-signup';
import { addChallenge } from '../../../actions/add-challenge';
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

class AddChallengeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { numberOfRequestInputs: 1,
      maxRequestInputs: false,
    };
  }

  componentWillMount() {
    this.props.allCampuses();
  }

  addRequirement() {
    this.setState((prevState, props) => {
      if (prevState.numberOfRequestInputs <= 4) {
        return { numberOfRequestInputs: prevState.numberOfRequestInputs + 1 };
      }
      return { maxRequestInputs: true };
    });
  }

  renderRequirementInputs(numOfInputs) {
    const requirementInputComponents = [];
    for (let i = 1; i <= numOfInputs; i++) {
      requirementInputComponents.push((<Field
        name="`requirements_${i}`"
        component={renderField}
        type="text"
        label="Requirement"
        placeholder="Requirement"
      />));
    }
    return requirementInputComponents;
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

            {this.renderRequirementInputs(this.state.numberOfRequestInputs)}

            {renderIf(this.state.numberOfRequestInputs <= 5 && this.state.maxRequestInputs === false)(
              <Form.Button onClick={() => this.addRequirement()}>Add Requirement</Form.Button>,
            )}

          </Form.Group>
          <Form.Field>
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

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'addChallenge' })(AddChallengeForm));
