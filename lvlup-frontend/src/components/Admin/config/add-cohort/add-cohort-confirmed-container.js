import { connect } from 'react-redux';
import { compose } from 'recompose';
import AddCohortComplete from './add-cohort-confirmed';

const mapStateToProps = state => ({
  addCohort: state.addedCohort,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(AddCohortComplete);
