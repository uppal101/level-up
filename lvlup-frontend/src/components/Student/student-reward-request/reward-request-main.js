import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import RewardRequestForm from './reward-request-form';
import RequestCompleted from './reward-request-completed';
import BrokeModal from './reward-request-broke';
import renderIf from 'render-if';
import { rewardRequest } from '../../../actions/student-rewards-actions';
import './reward-request-style.css';

const mapStateToProps = state => ({
  requestStatus: state.requestedReward.fulfilled,
  pts: state.studentPointsAndCampus,
  reward: state.selectedReward,
});

const mapDispatchToProps = dispatch => bindActionCreators({ rewardRequest }, dispatch);

const affordable = (reward, pts) => (reward.point_cost <= pts.currentTotal);

class StudentRewardRequest extends Component {
  render() {
    return (
      <div className="reward-request">
        {renderIf(!affordable(this.props.reward, this.props.pts))(
          <BrokeModal />,
        )}
        {renderIf(this.props.requestStatus === false && affordable(this.props.reward, this.props.pts))(
          <RewardRequestForm />,
        )}
        {renderIf(this.props.requestStatus === true && affordable(this.props.reward, this.props.pts))(
          <RequestCompleted />,
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentRewardRequest);
