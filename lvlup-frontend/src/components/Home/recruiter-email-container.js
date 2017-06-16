import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import RecruiterEmail from './recruiter-email';
import { recruiter } from '../../actions/admin-signup';

const mapDispatchToProps = dispatch => bindActionCreators({ recruiter }, dispatch);

const mapStateToProps = state => ({ recruiterDemo: state.recruiterDemo });

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(reduxForm({
  form: 'recruiter',
})(RecruiterEmail));
