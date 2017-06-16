import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChallengesTable from './challenges-table';
import { resetEditChallenge, makeChallengeInactive } from '../../../../actions/edit-challenge';
import { resetAddChallenge } from '../../../../actions/add-challenge';
import { campusChallenges, selectChallenge } from '../../../../actions/student-challenges-actions';
import { submissionsAction } from '../../../../actions/admin-dash-actions';
import { resetChallengeList } from '../../../../actions/reset-actions';
import { sortChallengeName,
  sortChallengeCatagory,
  sortChallengePoints,
  sortChallengeNameReverse,
  sortChallengeCatagoryReverse,
  sortChallengePointsReverse } from '../../../../actions/sort-actions';
import './challenges-style.css';

const mapStateToProps = state => ({
  adminInfo: state.adminLoginInfo,
  challenges: state.challenges,
  selectedChallenge: state.selectedChallenge,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  campusChallenges,
  selectChallenge,
  resetEditChallenge,
  submissionsAction,
  resetAddChallenge,
  makeChallengeInactive,
  resetChallengeList,
  sortChallengeName,
  sortChallengeCatagory,
  sortChallengePoints,
  sortChallengeNameReverse,
  sortChallengeCatagoryReverse,
  sortChallengePointsReverse }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    if (!this.props.challenges.fetched) this.props.campusChallenges(this.props.adminInfo.campus_id);
    this.props.resetEditChallenge();
    this.props.resetAddChallenge();
  },
});

export default compose(connectToStore, onDidMount)(ChallengesTable);
