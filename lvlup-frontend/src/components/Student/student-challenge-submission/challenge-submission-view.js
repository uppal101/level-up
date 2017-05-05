import React, { Component } from 'react';
import ChallengeSubmissionForm from './challenge-submission-form';
import SubmissionCompleted from './challenge-submission-completed';
import { connect } from 'react-redux';
import renderIf from 'render-if';

const mapStateToProps = state => ({
  submissionStatus: state.submittedChallenge.fulfilled,
});

class SubmissionMain extends Component {
  render() {
    return (
      <div>
        {renderIf(this.props.submissionStatus === false)(
          <ChallengeSubmissionForm />,
      )}

        {renderIf(this.props.submissionStatus === true)(
          <SubmissionCompleted />)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(SubmissionMain);
