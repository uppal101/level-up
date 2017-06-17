import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetCampusChallenges } from '../../../../actions/student-challenges-actions';
import AddChallengeCompleted from './add-challenge-completed';

const mapStateToProps = state => ({
  addedChallenge: state.addedChallenge,
  campuses: state.allCampuses,
  adminLoginInfo: state.adminLoginInfo,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  resetCampusChallenges }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.resetCampusChallenges(this.props.adminLoginInfo.campus_id);
  },
});

export default compose(connectToStore, onDidMount)(AddChallengeCompleted);
