import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetAdmin } from '../../../../actions/admin-config';
import { compose, lifecycle } from 'recompose';
import AdminCohortSuccessMessage from './add-admin-cohort-complete';

const mapDispatchToProps = dispatch => bindActionCreators({ resetAdmin }, dispatch);


const mapStateToProps = state => ({
  admin: state.loggedIn,
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.resetAdmin(this.props.admin.id);
  },
});


export default compose(connectToStore, onDidMount)(AdminCohortSuccessMessage);
