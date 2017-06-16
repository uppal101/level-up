import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { allCampuses } from '../../../../actions/admin-signup';
import { addCohort } from '../../../../actions/admin-config';
import { reduxForm } from 'redux-form';
import { compose, lifecycle } from 'recompose';
import AddACohortForm from './add-cohort-form';

const mapStateToProps = state => ({
  campuses: state.allCampuses,
  addedCohort: state.addedCohort,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  allCampuses,
  addCohort }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentWillMount() {
    this.props.allCampuses();
  },
});

export default compose(connectToStore, onDidMount)(reduxForm({
  form: 'addCohort' })(AddACohortForm));
