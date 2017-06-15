import { connect } from 'react-redux';
import { compose } from 'recompose';
import RequestCompleted from './request-completed';
import './request-styles.css';

const mapStateToProps = state => ({
  reward: state.selectedReward,
  requestedReward: state.requestedReward,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(RequestCompleted);
