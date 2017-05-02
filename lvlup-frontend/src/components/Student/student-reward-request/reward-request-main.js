import React, { Component } from 'react';
import { connect } from 'react-redux';
import RewardTitle from './reward-title.js';
import Submit from './button.js';
import Notes from './notes.js';

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  reward: state.selectedReward,
});

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

export default connect(mapStateToProps)(StudentRewardSubmission);
