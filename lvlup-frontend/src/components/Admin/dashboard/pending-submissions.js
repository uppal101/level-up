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
      <Table celled selectable color="orange">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" colSpan="4" className="table-head">
              <Dropdown text="Sort" id="sort-dropdown">
                <Dropdown.Menu>
                  <Dropdown.Item text="New" />
                  <Dropdown.Item text="Open..." description="ctrl + o" />
                  <Dropdown.Item text="Save as..." description="ctrl + s" />
                  <Dropdown.Item text="Rename" description="ctrl + r" />
                </Dropdown.Menu>
              </Dropdown>
              Pending Challenge Submissions
            </Table.HeaderCell>
            {/* <Table.HeaderCell textAlign="center" colSpan="1" id="sort">
              <Dropdown text="Sort">
                <Dropdown.Menu>
                  <Dropdown.Item text="New" />
                  <Dropdown.Item text="Open..." description="ctrl + o" />
                  <Dropdown.Item text="Save as..." description="ctrl + s" />
                  <Dropdown.Item text="Rename" description="ctrl + r" />
                </Dropdown.Menu>
              </Dropdown>
            </Table.HeaderCell> */}
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Date Submitted
              <Icon
                id="hover-icon"
                name="sort descending"
                onClick={() => props.sortSubmittedChrono()}
              />
              <Icon
                id="hover-icon"
                name="sort ascending"
                onClick={() => props.sortSubmittedRevChrono()}
              />
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">View</Table.HeaderCell>
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
