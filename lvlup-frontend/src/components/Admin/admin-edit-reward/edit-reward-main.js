import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import EditRewardForm from './edit-reward-form';
import EditRewardCompleted from './edit-reward-completed';

const mapStateToProps = state => ({
  editStatus: state.editedReward.fulfilled,
});

const EditReward = (props) => {
  const ifEdited = renderIf(props.editStatus);
  const ifNotEdited = renderIf(!props.editStatus);
  return (
    <div className="edit-reward">
      {ifNotEdited(<EditRewardForm />)}
      {ifEdited(<EditRewardCompleted />)}
    </div>
  );
};

export default connect(mapStateToProps)(EditReward);
