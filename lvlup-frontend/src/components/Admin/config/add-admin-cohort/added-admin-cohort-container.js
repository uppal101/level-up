import { connect } from 'react-redux';
import { compose } from 'recompose';
import AddAminCohort from './add-admin-cohort';


const mapStateToProps = state => ({
  addAdminCohort: state.addAdminCohort,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(AddAminCohort);
