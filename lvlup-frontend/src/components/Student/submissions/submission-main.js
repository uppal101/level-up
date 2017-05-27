import React, { Component } from 'react';
import ChallengeSubmissionForm from './submission-form';
import SubmissionCompleted from './submission-completed';
import { connect } from 'react-redux';
import renderIf from 'render-if';

const mapStateToProps = state => ({
  submissionStatus: state.submittedChallenge,
});

class SubmissionMain extends Component {
  render() {
    return (
      <div>
        {renderIf(this.props.submissionStatus.fulfilled === false)(
          <ChallengeSubmissionForm />,
      )}

        {renderIf(this.props.submissionStatus.fulfilled === true)(
          <SubmissionCompleted />)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(SubmissionMain);
