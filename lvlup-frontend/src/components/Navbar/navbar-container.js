import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  loginInfo: state.loginInfo,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(NavBar);
