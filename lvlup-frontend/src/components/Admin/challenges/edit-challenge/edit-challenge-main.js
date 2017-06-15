import React from 'react';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import EditChallengeForm from './edit-challenge-container';
import EditChallengeCompleted from './edited-challenge-container';

const mapStateToProps = state => ({
  editStatus: state.editedChallenge,
});

const EditChallenge = (props) => {
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
