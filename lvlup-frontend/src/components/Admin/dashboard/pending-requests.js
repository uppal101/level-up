import React from 'react';
import { Table, Container, Loader, Dropdown } from 'semantic-ui-react';
import renderPendingRequests from '../helpers/render-pending-requests';
import './dashboard-styles.css';

const PendingRequestsTable = (props) => {
  if (props.pendingRequests.requestsAdmin.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <Table celled selectable className="subsequent-table">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center" colSpan="5" className="thead-sortable">Pending Reward Requests
                <Dropdown text="Sort" className="sort">
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
  );
};

export default PendingRequestsTable;
