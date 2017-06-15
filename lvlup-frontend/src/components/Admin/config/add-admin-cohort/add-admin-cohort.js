import React from 'react';
import renderIf from 'render-if';
import { Container } from 'semantic-ui-react';
import AddAdminCohortForm from './add-admin-cohort-form-container';
import AdminCohortSuccessMessage from './add-admin-cohort-complete-container';

const AddAminCohort = props => (
  <Container>
    {renderIf(props.addAdminCohort.fulfilled === false)(<AddAdminCohortForm />)}
    {renderIf(props.addAdminCohort.fulfilled === true)(<AdminCohortSuccessMessage />)}
  </Container>
  );

export default AddAminCohort;
