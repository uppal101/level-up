import React from 'react';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import ChallengeSubmissionForm from './submission-container';
import SubmissionCompleted from './submitted-challenge-container';

const mapStateToProps = state => ({
  submissionStatus: state.submittedChallenge,
});

const SubmissionMain = props => (
  <div>
    {renderIf(props.submissionStatus.fulfilled === false)(
      <ChallengeSubmissionForm />,
  )}
    {renderIf(props.submissionStatus.fulfilled === true)(
      <SubmissionCompleted />)}
  </div>
);

export default connect(mapStateToProps)(SubmissionMain);
