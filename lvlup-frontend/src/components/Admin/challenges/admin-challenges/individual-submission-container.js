import { compose } from 'recompose';
import { connect } from 'react-redux';
import IndividualSubmission from './individual-submission';

const mapStateToProps = state => ({
  adminLoginInfo: state.adminLoginInfo,
  selectedChallenge: state.selectedChallenge,
});

const connectToStore = connect(mapStateToProps);

export default compose(connectToStore)(IndividualSubmission);
