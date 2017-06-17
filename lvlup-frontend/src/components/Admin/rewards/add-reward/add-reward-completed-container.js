import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { resetCampusRewards } from '../../../../actions/student-rewards-actions';
import AddRewardCompleted from './add-reward-completed-table';

const mapStateToProps = state => ({
  addedReward: state.addedReward,
  campuses: state.allCampuses,
  adminLoginInfo: state.adminLoginInfo,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  resetCampusRewards }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.resetCampusRewards(this.props.adminLoginInfo.campus_id);
  },
});

export default compose(connectToStore, onDidMount)(AddRewardCompleted);
