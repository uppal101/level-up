import { connect } from 'react-redux';
import { compose } from 'recompose';
import AddCohortPage from './add-cohort';

const mapStateToProps = state => ({
  addCohort: state.addedCohort,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(AddCohortPage);
