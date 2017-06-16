import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle } from 'recompose';
import { reduxForm } from 'redux-form';
import uploadcare from 'uploadcare-widget';
import { challengeSubmission } from '../../../actions/student-challenges-actions';
import ChallengeSubmissionForm from './submission-form';

const mapStateToProps = state => ({
  studentLoginInfo: state.studentLoginInfo,
  selectedChallenge: state.selectedChallenge,
});

const mapDispatchToProps = dispatch => bindActionCreators({ challengeSubmission }, dispatch);

const onDidMount = lifecycle({
  componentDidMount() {
    uploadcare.start({
      publicKey: '1c7b669f9c1e6b59ad80',
      tabs: 'all',
    });
  },
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, onDidMount)(reduxForm({ form: 'submission' })(ChallengeSubmissionForm));
