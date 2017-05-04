import React from 'react';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import EditChallengeForm from './edit-challenge-form';
import EditChallengeCompleted from './edit-challenge-completed';

const mapStateToProps = state => ({
  editStatus: state.editedChallenge.fulfilled,
});

const EditChallenge = (props) => {
  const ifEdited = renderIf(props.editStatus);
  const ifNotEdited = renderIf(!props.editStatus);
  return (
    <div className="edit-challenge">
      {ifNotEdited(<EditChallengeForm />)}
      {ifEdited(<EditChallengeCompleted />)}
    </div>
  );
};

export default connect(mapStateToProps)(EditChallenge);
