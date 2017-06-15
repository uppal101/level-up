import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../../actions/admin-login';
import { reduxForm } from 'redux-form';
import { compose, lifecycle } from 'recompose';
import LoginForm from './email';

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);

const mapStateToProps = state => ({
  loggedIn: false,
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(reduxForm({
  form: 'login',
})(LoginForm));
