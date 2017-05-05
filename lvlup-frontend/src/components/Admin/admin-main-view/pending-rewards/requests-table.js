import React, { Component } from 'react';
import { Icon, Table, Popup, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { formatDate } from '../../../../helpers/dashboard';
import '../admin-styles.css';

const mapStateToProps = state => ({
  adminInfo: state.loggedIn,
  pendingRequests: state.adminPendingRequests.requestsAdmin,
});

class RequestsTable extends Component {
  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
  }
  renderTable(list) {
    return list.filter(reward => reward.status === 'Pending approval').map(item => (
      <Table.Row key={`${item.id}requests-table-admin`}>
        <Table.Cell>{item.student.name}</Table.Cell>
        <Table.Cell>{item.reward.name}</Table.Cell>
        <Table.Cell>{formatDate(item.created_at)}</Table.Cell>
        <Table.Cell>
          <Popup
            trigger={<Icon circular name="comments" />}
            wide
          > {item.notes}
          </Popup>
        </Table.Cell>
        <Table.Cell><Icon name="close" /> <Icon name="checkmark" /></Table.Cell>
      </Table.Row>
      ),
    );
  }
  render() {
    if (this.props.pendingRequests.length === 0) {
      return <div>LOADING</div>;
    }
    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Reward</Table.HeaderCell>
              <Table.HeaderCell>Date Submitted</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
              <Table.HeaderCell>Approve</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderTable(this.props.pendingRequests)}
          </Table.Body>

          {/* <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="5">
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

export default connect(mapStateToProps)(RequestsTable);
