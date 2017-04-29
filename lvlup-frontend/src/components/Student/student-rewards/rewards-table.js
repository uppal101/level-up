import React, { Component } from 'react';
import { Icon, Menu, Table, Container } from 'semantic-ui-react';
import './student-rewards-style.css';

class RewardsTable extends Component {
  render() {
    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Points</Table.HeaderCell>
              <Table.HeaderCell>Request Reward</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Pizza Party</Table.Cell>
              <Table.Cell>lvl ^ Life</Table.Cell>
              <Table.Cell>Description</Table.Cell>
              <Table.Cell>75 per person</Table.Cell>
              <Table.Cell><a href="/student/reward-submission"><Icon name="long arrow right" /></a></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Job Fair</Table.Cell>
              <Table.Cell>lvl ^ Career</Table.Cell>
              <Table.Cell>Description</Table.Cell>
              <Table.Cell>30</Table.Cell>
              <Table.Cell><a href="/student/reward-submission"><Icon name="long arrow right" /></a></Table.Cell>
            </Table.Row>
          </Table.Body>

        </Table>
      </Container>
    );
  }
}

export default RewardsTable;
