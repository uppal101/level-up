import React, { Component } from 'react';
import RewardTitle from './reward-title.js';
import Submit from './button.js';
import Notes from './notes.js';

class StudentRewardSubmission extends Component {
  render() {
    return (
      <div className="reward-request">
        <RewardTitle />
        <Notes />
        <Submit />
      </div>
    );
  }
}

export default StudentRewardSubmission;
