import React from 'react';
import { Table, Loader, Dropdown } from 'semantic-ui-react';
import renderSubmissions from '../helpers/render-submissions';

const Submissions = (props) => {
  if (props.submissions.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  console.log(props.submissions);
  return (
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell className="thead-sortable" textAlign="center" colSpan="4">Current Submissions
              <Dropdown text="Sort" className="sort">
                <Dropdown.Menu>
                  <Dropdown.Item
                    text="by Points Least to Most"
                    onClick={() => props.sortSubmissionsAsc()}
                  />
                  <Dropdown.Item
                    text="by Points Most to Lease"
                    onClick={() => props.sortSubmissionsDesc()}
                  />
                  <Dropdown.Item
                    text="by Date Chronological"
                    onClick={() => props.sortSubmissionsChrono()}
                  />
                  <Dropdown.Item
                    text="by Date Reverse Chronological"
                    onClick={() => props.sortSubmissionsRevChrono()}
                  />
                </Dropdown.Menu>
              </Dropdown>
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell className="thead-secondary">Title</Table.HeaderCell>
          <Table.HeaderCell className="thead-secondary">Category</Table.HeaderCell>
          <Table.HeaderCell className="thead-secondary">Points</Table.HeaderCell>
          <Table.HeaderCell className="thead-secondary">Date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        { renderSubmissions(props.submissions)}
      </Table.Body>
    </Table>
  );
};

export default Submissions;
