import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle } from 'recompose';
import { campusRewards, selectReward, resetRequest } from '../../../actions/student-rewards-actions';
import StudentRewardsTable from './rewards-table';
import { sortRewardName,
  sortRewardCategory,
  sortRewardPoints,
  sortRewardNameReverse,
  sortRewardCategoryReverse,
  sortRewardPointsReverse } from '../../../actions/sort-actions';

const mapStateToProps = state => ({
  lvlUpInfo: state.studentPointsAndCampus,
  rewards: state.rewards,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  campusRewards,
  resetRequest,
  selectReward,
  sortRewardName,
  sortRewardCategory,
  sortRewardPoints,
  sortRewardNameReverse,
  sortRewardCategoryReverse,
  sortRewardPointsReverse }, dispatch);


const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentWillMount() {
    if (!this.props.rewards.fetched) this.props.campusRewards(this.props.lvlUpInfo.campusId);
    this.props.resetRequest();
  },
});

export default compose(connectToStore, onDidMount)(StudentRewardsTable);
