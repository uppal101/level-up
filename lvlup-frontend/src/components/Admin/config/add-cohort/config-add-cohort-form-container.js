import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { allCohorts } from '../../../../actions/admin-signup';
import { adminCohort } from '../../../../actions/admin-config';
import AddAdminCohortForm from './config-add-cohort-form';
import { reduxForm } from 'redux-form';

const mapStateToProps = state => ({
  cohorts: state.allCohorts,
  addAdminCohort: state.addAdminCohort,
  admin: state.loggedIn,
});

const mapDispatchToProps = dispatch => bindActionCreators({ allCohorts, adminCohort }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.allCohorts();
  },
});

export default compose(connectToStore, onDidMount)(reduxForm({
  form: 'addAdminCohort',
})(AddAdminCohortForm));
