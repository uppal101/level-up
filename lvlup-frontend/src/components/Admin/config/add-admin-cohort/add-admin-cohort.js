import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import AddAdminCohortForm from './add-admin-cohort-form';

const mapStateToProps = state => ({
  addAdminCohort: state.addedAdminCohort,
});

const AddAminCohort = () => (
  <AddAdminCohortForm />
  );

export default connect(mapStateToProps)(AddAminCohort);
