import React from 'react';
import renderIf from 'render-if';
import AddRewardForm from './add-reward-form-container';
import AddRewardCompleted from './add-reward-completed-container';

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

export default AddReward;
