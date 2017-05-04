import React from 'react';
import { Label, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  editedReward: state.editedReward.data,
});

const EditRewardCompleted = props => (
  <div>
    <Table celled color="orange">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Reward Edit Successful!</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Reward</Label>
            {props.editedReward.name}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Point Cost</Label>
            {props.editedReward.point_cost}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Description</Label>
            {props.editedReward.description}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Link to={'/admin/rewards'}>
      <Button>Back to Rewards</Button>
    </Link>
  </div>
);


export default connect(mapStateToProps)(EditRewardCompleted);
