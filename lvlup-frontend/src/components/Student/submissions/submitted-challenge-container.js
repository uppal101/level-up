import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import uploadcare from 'uploadcare-widget';
import ChallengeSubmissionForm from './submission-form';
import { challengeSubmission } from '../../../actions/student-challenges-actions';

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  selectedChallenge: state.selectedChallenge,
});

const mapDispatchToProps = dispatch => bindActionCreators({ challengeSubmission }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    uploadcare.start({
      publicKey: '1c7b669f9c1e6b59ad80',
      tabs: 'all',
    });
  },
});

export default compose(connectToStore, onDidMount)(reduxForm({ form: 'submission' })(ChallengeSubmissionForm));
