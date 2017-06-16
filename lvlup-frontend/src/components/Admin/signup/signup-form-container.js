import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { signup, allCohorts, allCampuses, setCohorts, setCampuses } from '../../../actions/admin-signup';
import SignupForm from './email';

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  setCampuses,
  setCohorts,
  allCampuses,
  allCohorts }, dispatch);

const mapStateToProps = state => ({
  adminSignup: state.adminSignup,
  cohorts: state.allCohorts,
  campuses: state.allCampuses,
});

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.allCampuses();
    this.props.allCohorts();
  },
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore, onDidMount)(reduxForm({ form: 'signup' })(SignupForm));
