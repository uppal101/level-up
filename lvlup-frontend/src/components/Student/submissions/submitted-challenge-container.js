import { compose } from 'recompose';
import { connect } from 'react-redux';
import SubmissionCompleted from './submission-completed';

const mapStateToProps = state => ({
  submission: state.submittedChallenge,
  studentLoginInfo: state.studentLoginInfo,
  selectedChallenge: state.selectedChallenge,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(SubmissionCompleted);
