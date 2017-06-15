import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StudentChallengesTable from './challenges-table';
import { campusChallenges, selectChallenge, resetChallenge } from '../../../actions/student-challenges-actions';

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  lvlUpInfo: state.studentPointsAndCampus,
  challenges: state.challenges,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  campusChallenges,
  selectChallenge,
  resetChallenge }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    if (!this.props.challenges.fetched) {
      console.log('did not fetch');
      return this.props.campusChallenges(this.props.lvlUpInfo.campusId);
    }
    this.props.resetChallenge();
  },
});

export default compose(connectToStore, onDidMount)(StudentChallengesTable);
