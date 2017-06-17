import React from 'react';
import { Table, Container, Loader, Icon, Dropdown } from 'semantic-ui-react';
import './dashboard-styles.css';
import renderPendingSubmissions from '../helpers/render-pending-submissions';

const PendingSubmissionsTable = (props) => {
  if (props.pendingSubmissions.submissionsAdmin.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <Container>
      <Table celled selectable id="submissions-table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" colSpan="3" className="table-head">
              Pending Challenge Submissions
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center" colSpan="1" className="sort-dropdown">
              <Dropdown text="Sort">
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
            <Table.HeaderCell className="sub-head">Name</Table.HeaderCell>
            <Table.HeaderCell className="sub-head">Title</Table.HeaderCell>
            <Table.HeaderCell textAlign="center" className="sub-head">Date Submitted
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center" className="sub-head">View</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {renderPendingSubmissions(props)}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default PendingSubmissionsTable;
