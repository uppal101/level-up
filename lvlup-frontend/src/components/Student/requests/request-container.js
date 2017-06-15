import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { rewardRequest } from '../../../actions/student-rewards-actions';
import { compose } from 'recompose';
import StudentRewardRequest from './request-main';

const mapStateToProps = state => ({
  requestStatus: state.requestedReward,
  pts: state.studentPointsAndCampus,
  reward: state.selectedReward,
});

const mapDispatchToProps = dispatch => bindActionCreators({ rewardRequest }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(StudentRewardRequest);
