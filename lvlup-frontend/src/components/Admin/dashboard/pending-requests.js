import React, { Component } from 'react';
import { Icon, Table, Popup, Container, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { formatDate } from '../../../helpers/dashboard';
import { bindActionCreators } from 'redux';
import { approveSelectedReward, denySelectedReward } from '../../../actions/pending-rewards-actions';
import { requestsAction } from '../../../actions/admin-dash-actions';
import { resetPendingRequests } from '../../../actions/reset-actions';
import './dashboard-styles.css';

const mapStateToProps = state => ({
  adminInfo: state.loggedIn,
  pendingRequests: state.adminPendingRequests,
});

const mapDispatchToProps = dispatch => bindActionCreators({ approveSelectedReward, denySelectedReward, requestsAction, resetPendingRequests }, dispatch);

class PendingRequestsTable extends Component {
  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
    this.state = {
      clicked: false,
    };
  }

  componentWillMount() {
    this.props.resetPendingRequests();
    this.props.adminInfo.cohorts.map(item => this.props.requestsAction(item.id));
  }

  renderTable(list) {
    return list.filter(reward => reward.status === 'Pending approval').map(item => (
      <Table.Row key={`${item.id}requests-table-admin`}>
        <Table.Cell>{item.student.name}</Table.Cell>
        <Table.Cell>{item.reward.name}</Table.Cell>
        <Table.Cell textAlign="center">{formatDate(item.created_at)}</Table.Cell>
        <Table.Cell textAlign="center">
          {
            item.notes ?
              <Popup
                trigger={<Icon circular id="hover-icon" color="orange" name="comments" />}
                wide
              > {item.notes}
              </Popup> : 'No Notes'
          }
        </Table.Cell>
        <Table.Cell textAlign="center">
          <div
            onClick={() => this.props.denySelectedReward(item, { status: 'Denied' }).then(() => {
              this.props.resetPendingRequests();
              this.props.adminInfo.cohorts.map(item => this.props.requestsAction(item.id));
            })}
          >
            <Icon id="hover-icon" name="close" />
          </div>
          <div
            onClick={() => this.props.approveSelectedReward(item, { status: 'Approved' }).then(() => {
              this.props.resetPendingRequests();
              this.props.adminInfo.cohorts.map(item => this.props.requestsAction(item.id));
            })}
          >
            <Icon id="hover-icon" color="orange" name="checkmark" />
          </div>
        </Table.Cell>
      </Table.Row>
      ),
    );
  }
  componentDidUpdate(prevProps) {
    if (prevProps.pendingRequests.requestsAdmin.status !== this.props.pendingRequests.requestsAdmin.status) {
      this.props.renderTable();// make backend call to update props
    }
  }
  render() {
    if (this.props.pendingRequests.requestsAdmin.length === 0) {
      return <Loader active inline="centered"> Loading </Loader>;
    }
    return (
      <Container className="subsequent-table">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="5">Pending Reward Requests</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Reward</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Date Submitted</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Notes</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Approve</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderTable(this.props.pendingRequests.requestsAdmin)}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingRequestsTable);
