import { connect } from 'react-redux';
import { compose } from 'recompose';
import EditRewardCompleted from './edit-reward-completed';

const mapStateToProps = state => ({
  editedReward: state.editedReward,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(EditRewardCompleted);
