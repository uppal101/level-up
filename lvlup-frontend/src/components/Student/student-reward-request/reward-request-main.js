import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import RewardRequestForm from './reward-request-form';
import RequestCompleted from './reward-request-completed';
import renderIf from 'render-if';
import { rewardRequest } from '../../../actions/student-rewards-actions';
import './reward-request-style.css';

const mapStateToProps = state => ({
  requestStatus: state.requestedReward.fulfilled,
});

const mapDispatchToProps = dispatch => bindActionCreators({ rewardRequest }, dispatch);

class StudentRewardRequest extends Component {
  render() {
    return (
      <div className="reward-request">
        {renderIf(this.props.requestStatus === false)(
          <RewardRequestForm />,
        )}
        {renderIf(this.props.requestStatus === true)(
          <RequestCompleted />,
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentRewardRequest);
