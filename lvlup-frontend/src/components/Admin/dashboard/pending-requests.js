import React from 'react';
import { Table, Container, Loader, Dropdown } from 'semantic-ui-react';
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
            <Table.HeaderCell textAlign="center" colSpan="4" className="table-head">Pending Reward Requests</Table.HeaderCell>
            <Table.HeaderCell textAlign="center" colSpan="1" id="sort-dropdown">
              <Dropdown text="Sort">
                <Dropdown.Menu>
                  <Dropdown.Item text="New" />
                  <Dropdown.Item text="Open..." description="ctrl + o" />
                  <Dropdown.Item text="Save as..." description="ctrl + s" />
                  <Dropdown.Item text="Rename" description="ctrl + r" />
                </Dropdown.Menu>
              </Dropdown>
            </Table.HeaderCell>
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
