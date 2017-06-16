import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import SignupInfo from './student-signup';
import { allCohorts } from '../../../actions/admin-signup';
import { signupStudent, moreStudentInfo } from '../../../actions/student-signup';

const mapDispatchToProps = dispatch => bindActionCreators({
  allCohorts,
  signupStudent,
  moreStudentInfo }, dispatch);

const mapStateToProps = state => ({
  cohorts: state.allCohorts,
  studentLoginInfo: state.studentLoginInfo,
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.allCohorts();
  },
});

export default compose(connectToStore, onDidMount)(reduxForm({
  form: 'studentSignup' })(SignupInfo));
