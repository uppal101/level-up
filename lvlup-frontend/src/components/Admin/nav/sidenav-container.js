import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AdminSidenav from './sidenav';
import { submissionsAction, requestsAction } from '../../../actions/admin-dash-actions';
import { resetAdmin } from '../../../actions/admin-config';

export const mapDispatchToProps = dispatch => bindActionCreators({
  submissionsAction,
  requestsAction,
  resetAdmin,
}, dispatch);

export const mapStateToProps = state => ({
  adminLoginInfo: state.adminLoginInfo,
  pendingSubmissions: state.adminPendingSubmissions,
  pendingRequests: state.adminPendingRequests,
  selectedChallenge: state.selectedChallenge,
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    const userId = localStorage.getItem('userId');
    if (!this.props.adminLoginInfo.username && userId) {
      this.props.resetAdmin(Number(userId));
    }
  },
});

export default compose(connectToStore, onDidMount)(AdminSidenav);
