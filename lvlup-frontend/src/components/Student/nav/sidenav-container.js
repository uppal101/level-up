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
  loginInfo: state.loginInfo,
  studentPointsAndCampus: state.studentPointsAndCampus,
});
const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.loggingInAction()
    .then(() => {
      if (this.props.loginInfo.username) {
        this.props.moreStudentInfo(this.props.loginInfo.id);
      }
    })
    .then(() => this.props.submissionsAction(this.props.loginInfo.id))
    .then(() => this.props.requestsAction(this.props.loginInfo.id));
  },

  componentDidUpdate(prevProps) {
    if (prevProps.loginInfo.cohort_id !== this.props.loginInfo.cohort_id) {
      this.props.moreStudentInfo(this.props.loginInfo.id);
    }
  },
});

export default compose(connectToStore, onDidMount)(StudentSidenav);
