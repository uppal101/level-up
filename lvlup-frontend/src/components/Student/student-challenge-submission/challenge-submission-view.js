import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentChallengeSubmission from './challenge-submission-main';
import SubmissionCompleted from './challenge-submission-complete';
import renderIf from 'render-if';

const mapStateToProps = state => ({
  submission: state.submissionChallenge,
  loginInfo: state.loginInfo,
  selectedChallenge: state.selectedChallenge,
});

class SubmissionMain extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.prevProps.submissions !== false) {
  //     <SubmissionCompleted />;
  //   }
  // }

  render() {
    return (
      <div>
        {renderIf(this.props.submission.fulfilled === false)(
          <StudentChallengeSubmission />,
      )}

        {renderIf(this.props.submission.fulfilled === true)(
          <SubmissionCompleted />)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(SubmissionMain);
