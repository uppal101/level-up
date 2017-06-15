import { connect } from 'react-redux';
import { compose } from 'recompose';
import AddRewardCompleted from './add-reward-completed-table';

const mapStateToProps = state => ({
  addedReward: state.addedReward,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(AddRewardCompleted);
