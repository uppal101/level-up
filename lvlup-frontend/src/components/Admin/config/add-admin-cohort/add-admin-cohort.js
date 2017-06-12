import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import { Container } from 'semantic-ui-react';
import AddAdminCohortForm from './add-admin-cohort-form';
import AdminCohortSuccessMessage from './add-admin-cohort-complete';

const mapStateToProps = state => ({
  addAdminCohort: state.addAdminCohort,
});

const AddAminCohort = props => (
  <Container>
    {renderIf(props.addAdminCohort.fulfilled === false)(<AddAdminCohortForm />)}
    {renderIf(props.addAdminCohort.fulfilled === true)(<AdminCohortSuccessMessage />)}
  </Container>
  );

export default connect(mapStateToProps)(AddAminCohort);
