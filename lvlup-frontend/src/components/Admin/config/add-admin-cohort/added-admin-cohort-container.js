import React from 'react';
import { connect } from 'react-redux';
import AddAminCohort from './add-admin-cohort';
import { compose } from 'recompose';


const mapStateToProps = state => ({
  addAdminCohort: state.addAdminCohort,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(AddAminCohort);
