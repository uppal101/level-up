import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import SelectedSubmission from './submission';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  selectedChallenge: state.selectedChallenge,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(SelectedSubmission);
