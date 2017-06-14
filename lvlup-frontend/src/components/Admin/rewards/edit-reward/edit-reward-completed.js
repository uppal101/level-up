import React from 'react';
import { Label, Table, Button, Grid, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const EditRewardCompleted = props => (
  <Container className="lvl-table">
    <Table celled color="orange">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center">Reward Edit Successful!</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Reward</Label>
            {props.editedReward.data.name}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Point Cost</Label>
            {props.editedReward.data.point_cost}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Description</Label>
            {props.editedReward.data.description}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Grid centered>
      <Link to={'/admin/rewards'}>
        <Button basic color="orange" id="completed-btn">Back to Rewards</Button>
      </Link>
    </Grid>
  </Container>
);


export default EditRewardCompleted;
