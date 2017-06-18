import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Submissions from './submissions';
import {
  sortSubmissionsAsc,
  sortSubmissionsDesc,
} from '../../../actions/sort-actions';
import {
  sortSubmissionsChrono,
  sortSubmissionsRevChrono,
} from '../../../actions/sort-date-actions';


const mapStateToProps = state => ({
  submissions: state.submissions.submissions,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  sortSubmissionsAsc,
  sortSubmissionsDesc,
  sortSubmissionsChrono,
  sortSubmissionsRevChrono,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Submissions);
