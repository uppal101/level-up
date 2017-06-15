import React, { PureComponent } from 'react';
import { Form, Loader, Container, Segment } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { renderMultiSelectField } from '../../helpers/render-fields';
import { required } from '../../helpers/validations';
import cohortsFilter from '../../../../helpers/cohort-filter';
import '../admin-config-styles.css';

class AddAdminCohortForm extends PureComponent {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    this.props.adminCohort(this.props.admin.id, values);
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
                  className="multiSelect"
                >
                  <option default>Select Cohorts</option>
                  {cohortsFilter(this.props.cohorts, this.props.admin.cohorts).map(option => <option value={option.id}>{`${option.type} ${option.name}`}</option>)}
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

export default AddAdminCohortForm;
