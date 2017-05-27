import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RewardRequestForm from './request-form';
import RequestCompleted from './request-completed';
import InsufficientPoints from './request-insufficient-points';
import renderIf from 'render-if';
import { rewardRequest } from '../../../actions/student-rewards-actions';
import './request-styles.css';

const mapStateToProps = state => ({
  requestStatus: state.requestedReward,
  pts: state.studentPointsAndCampus,
  reward: state.selectedReward,
});

const mapDispatchToProps = dispatch => bindActionCreators({ rewardRequest }, dispatch);

export class StudentRewardRequest extends Component {
  render() {
    const isAffordable = () => this.props.reward.point_cost <= this.props.pts.currentTotal;
    const ifRequested = renderIf(this.props.requestStatus.fulfilled && isAffordable());
    const ifNotRequested = renderIf(!this.props.requestStatus.fulfilled && isAffordable());

    return (
      <div>
        {renderIf(!isAffordable())(
          <InsufficientPoints />,
        )}
        {ifNotRequested(
          <RewardRequestForm />,
        )}
        {ifRequested(
          <RequestCompleted />,
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentRewardRequest);
