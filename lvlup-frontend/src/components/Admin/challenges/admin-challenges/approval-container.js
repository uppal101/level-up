import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import SubmissionApprovalForm from './approval-form';
import { submissionFormAdmin } from '../../../../actions/challenge-review';

const mapStateToProps = state => ({
  selectedChallenge: state.selectedChallenge,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  submissionFormAdmin }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(reduxForm({
  form: 'submissionApproval',
})(SubmissionApprovalForm));
