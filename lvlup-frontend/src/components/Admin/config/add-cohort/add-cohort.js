import React, { Component } from 'react';
import AddACohortForm from './config-add-cohort-form';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import AddCohortComplete from './add-cohort-confirmed';

const mapStateToProps = state => ({
  addCohort: state.addedCohort,
});

const AddCohortPage = props => (
  <div>
    {renderIf(props.addCohort.fulfilled === false)(<AddACohortForm />)}
    {renderIf(props.addCohort.fulfilled === true)(<AddCohortComplete />)}
  </div>
);

export default connect(mapStateToProps)(AddCohortPage);
