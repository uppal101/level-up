import React, { Component } from 'react';
import { Label, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './reward-request-style.css';

const mapStateToProps = state => ({
  reward: state.selectedReward,
  requestedReward: state.requestedReward,
});

class RequestCompleted extends Component {

  render() {
    return (
      <div>
        <Table celled color="orange">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Reward Request Successful!</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Requested Reward</Label>
                {this.props.reward.name}
              </Table.Cell>
            </Table.Row>
            {this.props.requestedReward.data.notes ?
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Request Notes</Label>
                  {this.props.requestedReward.data.notes}
                </Table.Cell>
              </Table.Row> : null}
          </Table.Body>
        </Table>
        <Link to={'/student/rewards'}>
          <Button>Back to Rewards</Button>
        </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(RequestCompleted);
