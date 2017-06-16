import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PendingRequestsTable from './pending-requests';
import { approveSelectedReward, denySelectedReward } from '../../../actions/pending-rewards-actions';
import { requestsAction } from '../../../actions/admin-dash-actions';
import { resetPendingRequests } from '../../../actions/reset-actions';

const mapStateToProps = state => ({
  adminInfo: state.adminLoginInfo,
  pendingRequests: state.adminPendingRequests,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  approveSelectedReward,
  denySelectedReward,
  requestsAction,
  resetPendingRequests }, dispatch);

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.resetPendingRequests();
    this.props.adminInfo.cohorts.map(item => this.props.requestsAction(item.id));
  },
});

export default compose(connectToStore, onDidMount)(PendingRequestsTable);
