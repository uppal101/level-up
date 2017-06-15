import React from 'react';
import renderIf from 'render-if';
import RewardRequestForm from './request-form-container';
import RequestCompleted from './request-completed-container';
import InsufficientPoints from './request-insufficient-points';
import './request-styles.css';

const StudentRewardRequest = (props) => {
  const isAffordable = () => props.reward.point_cost <= props.pts.currentTotal;
  const ifRequested = renderIf(props.requestStatus.fulfilled && isAffordable());
  const ifNotRequested = renderIf(!props.requestStatus.fulfilled && isAffordable());

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
};


export default StudentRewardRequest;
