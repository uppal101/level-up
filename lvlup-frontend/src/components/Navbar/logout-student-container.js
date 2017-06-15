import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loggingOutStudent } from '../../actions/navbar';
import { compose } from 'recompose';
import LogOutGithub from './logout-student';

const mapDispatchToProps = dispatch => bindActionCreators({ loggingOutStudent }, dispatch);

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(LogOutGithub);
