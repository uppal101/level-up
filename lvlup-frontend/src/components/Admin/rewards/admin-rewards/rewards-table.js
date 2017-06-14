import React from 'react';
import renderRewards from './render-rewards';
import { Table, Container, Button, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../../dashboard/dashboard-styles.css';
import './rewards-styles.css';


const RewardsTable = (props) => {
  if (props.rewards.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <div className="lvl-table">
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="6">Rewards</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Edit</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Remove</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Points</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {renderRewards(props)}
          </Table.Body>
        </Table>
        <Link to="/admin/reward-add"><Button basic color="orange" content="Add Reward" /></Link>
      </Container>
    </div>
  );
};


export default RewardsTable;
