import React from 'react';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import AddChallengeForm from './add-challenge-form';
import AddChallengeCompleted from './add-challenge-completed';

const mapStateToProps = state => ({
  addStatus: state.addedChallenge.fulfilled,
});

const AddChallenge = (props) => {
  const ifAdded = renderIf(props.addStatus);
  const ifNotAdded = renderIf(!props.addStatus);
  return (
    <div className="add-challenge">
      {ifNotAdded(<AddChallengeForm />)}
      {ifAdded(<AddChallengeCompleted />)}
    </div>
  );
};

export default connect(mapStateToProps)(AddChallenge);
