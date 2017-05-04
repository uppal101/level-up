import React, { Component } from 'react';
import { Label, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  editedReward: state.editedReward.data,
});

class EditRewardCompleted extends Component {

  render() {
    return (
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
                {this.props.editedReward.name}
              </Table.Cell>
            </Table.Row>
            {this.props.editedReward.point_cost ?
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Reward</Label>
                  {this.props.editedReward.point_cost}
                </Table.Cell>
              </Table.Row> : null}
          </Table.Body>
        </Table>
        <Link to={'/admin/rewards'}>
          <Button>Back to Rewards</Button>
        </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(EditRewardCompleted);
