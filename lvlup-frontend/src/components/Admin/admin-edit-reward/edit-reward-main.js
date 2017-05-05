import React from 'react';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import EditRewardForm from './edit-reward-form';
import EditRewardCompleted from './edit-reward-completed';

const mapStateToProps = state => ({
  editStatus: state.editedReward,
});

export const EditReward = (props) => {
  const ifEdited = renderIf(props.editStatus.fulfilled);
  const ifNotEdited = renderIf(!props.editStatus.fulfilled);
  return (
    <div className="edit-reward">
      {ifNotEdited(<EditRewardForm />)}
      {ifEdited(<EditRewardCompleted />)}
    </div>
  );
};

export default connect(mapStateToProps)(EditReward);
