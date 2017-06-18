import React from 'react';
import { Table, Loader, Dropdown } from 'semantic-ui-react';
import './dashboard-styles.css';
import renderPendingSubmissions from '../helpers/render-pending-submissions';

const PendingSubmissionsTable = (props) => {
  if (props.pendingSubmissions.submissionsAdmin.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <Table celled selectable id="submissions-table">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center" colSpan="4" className="thead-sortable">
              Pending Challenge Submissions
                <Dropdown text="Sort" className="sort">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      text="by Name Ascending"
                      onClick={() => props.sortSubmittedAsc()}
                    />
                    <Dropdown.Item
                      text="by Name Descending"
                      onClick={() => props.sortSubmittedDesc()}
                    />
                    <Dropdown.Item
                      text="by Date Chronological"
                      onClick={() => props.sortSubmittedChrono()}
                    />
                    <Dropdown.Item
                      text="by Date Reverse Chronological"
                      onClick={() => props.sortSubmittedRevChrono()}
                    />
                  </Dropdown.Menu>
                </Dropdown>
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell className="thead-secondary">Name</Table.HeaderCell>
          <Table.HeaderCell className="thead-secondary">Title</Table.HeaderCell>
          <Table.HeaderCell textAlign="center" className="thead-secondary">Date Submitted
            </Table.HeaderCell>
          <Table.HeaderCell textAlign="center" className="thead-secondary">View</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {renderPendingSubmissions(props)}
      </Table.Body>
    </Table>
  );
};

export default PendingSubmissionsTable;
