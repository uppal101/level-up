import { compose } from 'recompose';
import { connect } from 'react-redux';
import EditChallengeCompleted from './edit-challenge-completed';

const mapStateToProps = state => ({
  editedChallenge: state.editedChallenge,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(EditChallengeCompleted);
