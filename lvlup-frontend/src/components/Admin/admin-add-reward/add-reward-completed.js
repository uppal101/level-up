import React from 'react';
import { Label, Table, Button, Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  addedReward: state.addedReward.data,
});

const AddRewardCompleted = props => (
  <Container>
    <Table celled color="orange">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Reward Successfully Added!</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Reward</Label>
            {props.addedReward.name}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Point Cost</Label>
            {props.addedReward.point_cost}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Description</Label>
            {props.addedReward.description}
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


export default connect(mapStateToProps)(AddRewardCompleted);
