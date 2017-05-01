import React, { Component } from 'react';
import ChallengeTitle from './challenge-title';
import Submit from './button';
import Links from './links';
import ChallengeSubmissionHeader from './header';
import Uploads from './uploads';


class StudentChallengeSubmission extends Component {
  render() {
    return (
      <div className="challenge-submission">
        <ChallengeSubmissionHeader />
        <ChallengeTitle />
        <Links />
        <Uploads />
        <Submit />
      </div>
    );
  }
}

export default StudentChallengeSubmission;
