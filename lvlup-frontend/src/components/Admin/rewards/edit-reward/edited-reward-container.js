import { connect } from 'react-redux';
import { compose } from 'recompose';
import EditReward from './edit-reward-main';

const mapStateToProps = state => ({
  editStatus: state.editedReward,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(EditReward);
