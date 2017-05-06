import React, { Component } from 'react';
import { Icon, Table, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { selectChallenge } from '../../../../actions/student-challenges-actions';
import { formatDate } from '../../../../helpers/dashboard';
import '../admin-styles.css';
import { submissionsAction } from '../../../../actions/admin-dash-actions';
import { resetPendingSubmissions } from '../../../../actions/reset-actions';

const mapStateToProps = state => ({
  adminInfo: state.loggedIn,
  pendingSubmissions: state.adminPendingSubmissions,
  selectedChallenge: state.selectedChallenge,
});

const mapDispatchToProps = dispatch => bindActionCreators({ selectChallenge, submissionsAction, resetPendingSubmissions }, dispatch);


class ChallengesTable extends Component {
  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
  }

  componentWillMount() {
    this.props.resetPendingSubmissions();
    this.props.adminInfo.cohorts.map(item => this.props.submissionsAction(item.id));
  }

  renderTable(list) {
    return list.filter(challenge => challenge.submission_status === 'Pending approval').map(item => (
      <Table.Row key={`${item.id}challenges-table-admin`}>
        <Table.Cell>{item.student.name}</Table.Cell>
        <Table.Cell>{item.challenge.name}</Table.Cell>
        <Table.Cell textAlign="center">{formatDate(item.created_at)}</Table.Cell>
        <Table.Cell textAlign="center" onClick={() => this.props.selectChallenge(item)}><Link to={`/admin/individual-pending-challenge/${item.id}`}><Icon color="orange" name="eye" /></Link></Table.Cell>
      </Table.Row>
      ),
    );
  }
  render() {
    if (this.props.pendingSubmissions.submissionsAdmin.length === 0) {
      return <div>LOADING</div>;
    }
    return (
      <Container>
        <Table celled color="orange">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Date Submitted</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">View</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderTable(this.props.pendingSubmissions.submissionsAdmin)}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengesTable);
