import React from 'react';
import { Table, Loader } from 'semantic-ui-react';
import renderChallenges from '../helpers/render-challenges';

const StudentChallengesTable = (props) => {
  if (props.challenges.challenges.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <div className="lvl-table">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" colSpan="6">Challenges Available</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Requirement</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Points</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Submit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {renderChallenges(props)}
        </Table.Body>
      </Table>
    </div>
  );
};

export default StudentChallengesTable;
