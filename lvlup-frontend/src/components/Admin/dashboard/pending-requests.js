import React from 'react';
import { Table, Container, Loader } from 'semantic-ui-react';
import renderPendingRequests from '../helpers/render-pending-requests';
import './dashboard-styles.css';

const PendingRequestsTable = (props) => {
  if (props.pendingRequests.requestsAdmin.length === 0) {
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
          {renderPendingRequests(props)}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default PendingRequestsTable;
