import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { reduxForm } from 'redux-form';
import { allCohorts } from '../../../../actions/admin-signup';
import { adminCohort } from '../../../../actions/admin-config';
import AddAdminCohortForm from './add-admin-cohort-form';

const mapStateToProps = state => ({
  cohorts: state.allCohorts,
  addAdminCohort: state.addAdminCohort,
  admin: state.adminLoginInfo,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  allCohorts,
  adminCohort }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.allCohorts();
  },
});

export default compose(connectToStore, onDidMount)(reduxForm({
  form: 'addAdminCohort',
})(AddAdminCohortForm));
