import { connect } from 'react-redux';
import { compose } from 'recompose';
import AddReward from './add-reward-main';

const mapStateToProps = state => ({
  addStatus: state.addedReward,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(AddReward);
