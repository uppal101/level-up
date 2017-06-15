import { compose } from 'recompose';
import { connect } from 'react-redux';
import AddChallengeCompleted from './add-challenge-completed';

const mapStateToProps = state => ({
  addedChallenge: state.addedChallenge,
  campuses: state.allCampuses,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(AddChallengeCompleted);
