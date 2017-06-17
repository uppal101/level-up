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
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" colSpan="4" className="thead-sortable">Pending Reward Requests</Table.HeaderCell>
            <Table.HeaderCell textAlign="center" colSpan="1" className="sort-dropdown">
              <Dropdown text="Sort">
                <Dropdown.Menu>
                  <Dropdown.Item
                    text="by Name Ascending"
                    onClick={() => props.sortRequestsAsc()}
                  />
                  <Dropdown.Item
                    text="by Name Descending"
                    onClick={() => props.sortRequestsDesc()}
                  />
                  <Dropdown.Item
                    text="by Date Chronological"
                    onClick={() => props.sortRequestsChrono()}
                  />
                  <Dropdown.Item
                    text="by Date Reverse Chronological"
                    onClick={() => props.sortRequestsRevChrono()}
                  />
                </Dropdown.Menu>
              </Dropdown>
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell className="thead-secondary">Name</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary">Reward</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary" textAlign="center">Date Submitted</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary" textAlign="center">Notes</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary" textAlign="center">Approve</Table.HeaderCell>
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
