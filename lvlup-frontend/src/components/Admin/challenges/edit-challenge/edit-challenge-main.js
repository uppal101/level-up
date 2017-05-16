import React from 'react';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import EditChallengeForm from './edit-challenge-form';
import EditChallengeCompleted from './edit-challenge-completed';

const mapStateToProps = state => ({
  editStatus: state.editedChallenge,
});

export const EditChallenge = (props) => {
  const ifEdited = renderIf(props.editStatus.fulfilled);
  const ifNotEdited = renderIf(!props.editStatus.fulfilled);
  return (
    <div className="form-view">
      {ifNotEdited(<EditChallengeForm />)}
      {ifEdited(<EditChallengeCompleted />)}
    </div>
  );
};

export default connect(mapStateToProps)(EditChallenge);
