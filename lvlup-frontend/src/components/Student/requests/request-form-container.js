import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { rewardRequest } from '../../../actions/student-rewards-actions';
import RewardRequestForm from './request-form';
import './request-styles.css';

const mapStateToProps = state => ({
  studentLoginInfo: state.studentLoginInfo,
  reward: state.selectedReward,
});

const mapDispatchToProps = dispatch => bindActionCreators({ rewardRequest }, dispatch);


const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(reduxForm({
  form: 'request' })(RewardRequestForm));
