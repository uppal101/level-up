import React from 'react';
import { Table, Container, Loader } from 'semantic-ui-react';
import './dashboard-styles.css';
import renderPendingSubmissions from '../helpers/render-pending-submissions';

const PendingSubmissionsTable = (props) => {
  if (props.pendingSubmissions.submissionsAdmin.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <Container>
      <Table celled color="orange">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" colSpan="4">
              Pending Challenge Submissions
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Date Submitted</Table.HeaderCell>
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
