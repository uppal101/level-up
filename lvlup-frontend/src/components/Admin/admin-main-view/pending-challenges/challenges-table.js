import React, { Component } from 'react';
import { Icon, Table, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { selectChallenge } from '../../../../actions/student-challenges-actions';
import { formatDate } from '../../../../helpers/dashboard';
import '../admin-styles.css';

const mapStateToProps = state => ({
  adminInfo: state.loggedIn,
  pendingSubmissions: state.adminPendingSubmissions.submissionsAdmin,

});

const mapDispatchToProps = dispatch => bindActionCreators({ selectChallenge }, dispatch);


class ChallengesTable extends Component {
  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
  }
  renderTable(list) {
    return list.filter(challenge => challenge.submission_status === 'Pending approval').map(item => (
      <Table.Row key={`${item.id}challenges-table-admin`}>
        <Table.Cell>{item.student.name}</Table.Cell>
        <Table.Cell>{item.challenge.name}</Table.Cell>
        <Table.Cell>{formatDate(item.created_at)}</Table.Cell>
        <Table.Cell onClick={() => this.props.selectChallenge(item)}><Link to={`/admin/individual-pending-challenge/${item.id}`}><Icon name="eye" /></Link></Table.Cell>
      </Table.Row>
      ),
    );
  }
  render() {
    if (this.props.pendingSubmissions.length === 0) {
      return <div>LOADING</div>;
    }
    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Date Submitted</Table.HeaderCell>
              <Table.HeaderCell>View</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderTable(this.props.pendingSubmissions)}
          </Table.Body>

          {/* <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="4">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="left chevron" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="right chevron" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer> */}
        </Table>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengesTable);
