import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StudentDashboard from './dashboard';
import { submissionsAction } from '../../../actions/student-dash-actions';
import {
  sortSubmissionsAsc,
  sortSubmissionsDesc,
  sortAchvmntsAsc,
  sortAchvmntsDesc,
  sortRewardsAsc,
  sortRewardsDesc,
} from '../../../actions/sort-actions';
import {
  sortSubmissionsChrono,
  sortSubmissionsRevChrono,
  sortAchvmntsChrono,
  sortAchvmntsRevChrono,
  sortRewardsChrono,
  sortRewardsRevChrono,
} from '../../../actions/sort-date-actions';


const mapStateToProps = state => ({
  studentLoginInfo: state.studentLoginInfo,
  lvlUpInfo: state.studentPointsAndCampus,
  submissions: state.submissions,
  requests: state.requests,
  submission: state.submissionChallenge,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  submissionsAction,
  sortSubmissionsAsc,
  sortSubmissionsDesc,
  sortSubmissionsChrono,
  sortSubmissionsRevChrono,
  sortAchvmntsAsc,
  sortAchvmntsDesc,
  sortAchvmntsChrono,
  sortAchvmntsRevChrono,
  sortRewardsAsc,
  sortRewardsDesc,
  sortRewardsChrono,
  sortRewardsRevChrono,
}, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    if (this.props.studentLoginInfo.id) {
      this.props.submissionsAction(this.props.studentLoginInfo.id);
    }
  },
});

export default compose(connectToStore, onDidMount)(StudentDashboard);
