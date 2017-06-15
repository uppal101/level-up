import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import AdminSignup from './signup';

const mapStateToProps = state => ({
  signedUp: state.signedUp,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(AdminSignup);
