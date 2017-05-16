import React from 'react';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import AddRewardForm from './add-reward-form';
import AddRewardCompleted from './add-reward-completed';

const mapStateToProps = state => ({
  addStatus: state.addedReward,
});

const AddReward = (props) => {
  const ifAdded = renderIf(props.addStatus.fulfilled);
  const ifNotAdded = renderIf(!props.addStatus.fulfilled);
  return (
    <div className="add-reward">
      {ifNotAdded(<AddRewardForm />)}
      {ifAdded(<AddRewardCompleted />)}
    </div>
  );
};

export default connect(mapStateToProps)(AddReward);
