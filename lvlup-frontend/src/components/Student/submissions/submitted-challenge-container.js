import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submissionsAction } from '../../../actions/student-dash-actions';
import SubmissionCompleted from './submission-completed';

const mapStateToProps = state => ({
  submission: state.submittedChallenge,
  studentLoginInfo: state.studentLoginInfo,
  selectedChallenge: state.selectedChallenge,
});

const mapDispatchToProps = dispatch => bindActionCreators({ submissionsAction }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.submissionsAction(this.props.studentLoginInfo.id);
  },
});

export default compose(connectToStore, onDidMount)(SubmissionCompleted);
