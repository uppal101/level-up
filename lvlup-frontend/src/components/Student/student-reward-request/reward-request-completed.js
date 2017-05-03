import React, { Component } from 'react';
import { Label, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetRequest } from '../../../actions/student-rewards-actions';
import './reward-request-style.css';

const mapStateToProps = state => ({
  reward: state.selectedReward,
  requestedReward: state.requestedReward.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({ resetRequest }, dispatch);

class RequestCompleted extends Component {
  render() {
    return (
      <div>
        <Table celled>
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
            {this.props.requestedReward.notes ?
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Request Notes</Label>
                  {this.props.requestedReward.notes}
                </Table.Cell>
              </Table.Row> : null}
          </Table.Body>
        </Table>
        <Link to={'/student/rewards'}>
          <Button onClick={() => this.props.resetRequest()}>Confirm Your Request</Button>
        </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestCompleted);
