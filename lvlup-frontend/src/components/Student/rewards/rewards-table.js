import React from 'react';
import { Table, Container, Loader } from 'semantic-ui-react';
import renderRewards from '../helpers/render-rewards';

const StudentRewardsTable = (props) => {
  if (props.rewards.rewards.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <div className="lvl-table">
      <Container>
        <Table celled color="orange">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="5">Rewards</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Points</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Request</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {renderRewards(props)}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
};

export default StudentRewardsTable;
