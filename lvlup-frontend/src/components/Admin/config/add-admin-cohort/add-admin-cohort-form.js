import React, { Component } from 'react';
import { Form, Loader, Container, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { renderMultiSelectField } from '../../admin-common/render-fields';
import { required } from '../../admin-common/validations';
import { allCohorts } from '../../../../actions/admin-signup';
import { adminCohort } from '../../../../actions/admin-config';
import cohortsSorter from '../../../../helpers/cohort-sorter';

function mapStateToProps(state, ownProps) {
  return {
    cohorts: state.allCohorts,
    addedCohort: state.addedCohort,
    admin: state.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ allCohorts, adminCohort }, dispatch);
}

class AddAdminCohortForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    this.props.adminCohort(this.props.admin.id, values);
  }
  componentWillMount() {
    this.props.allCohorts();
  }
  render() {
    if (this.props.cohorts.length === 0) {
      return <Loader active inline="centered"> Loading </Loader>;
    }
    const { handleSubmit } = this.props;
    return (
      <div className="addACohort">
        <Container>
          <h2 className="addCohortHeader"> Add a Cohort To Your Profile </h2>
          <Segment inverted>
            <Form onSubmit={handleSubmit(this.submit)}>
              <Form.Field inline>
                <Field
                  name="cohorts"
                  component={renderMultiSelectField}
                  type="text"
                  label="Cohorts"
                  placeholder="Select Cohorts You Want To Add"
                  validate={[required]}
                >
                  <option default>Select Campus</option>
                  {cohortsSorter(this.props.cohorts, this.props.admin.cohorts).map(option => <option value={option.id}>{`${option.type} ${option.name}`}</option>)}
                </Field>
              </Form.Field>
              <Form.Button basic color="orange">Add a Cohort</Form.Button>
            </Form>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'addAdminCohort' })(AddAdminCohortForm));
