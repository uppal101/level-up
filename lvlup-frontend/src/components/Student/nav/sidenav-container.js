import { loggingInAction, moreStudentInfo, submissionsAction, requestsAction } from '../../../actions/student-dash-actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import StudentSidenav from './sidenav.js';

const mapDispatchToProps = dispatch => bindActionCreators({
  loggingInAction,
  moreStudentInfo,
  submissionsAction,
  requestsAction }, dispatch);

const mapStateToProps = state => ({
  studentLoginInfo: state.studentLoginInfo,
  studentPointsAndCampus: state.studentPointsAndCampus,
});
const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.loggingInAction()
    .then(() => {
      if (this.props.studentLoginInfo.username) {
        this.props.moreStudentInfo(this.props.studentLoginInfo.id);
      }
    })
    .then(() => this.props.submissionsAction(this.props.studentLoginInfo.id))
    .then(() => this.props.requestsAction(this.props.studentLoginInfo.id));
  },

  componentDidUpdate(prevProps) {
    if (prevProps.studentLoginInfo.cohort_id !== this.props.studentLoginInfo.cohort_id) {
      this.props.moreStudentInfo(this.props.studentLoginInfo.id);
    }
  },
});

export default compose(connectToStore, onDidMount)(StudentSidenav);
