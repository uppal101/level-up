import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon, Table, Container } from 'semantic-ui-react';
import { campusRewards } from '../../../actions/student-rewards-actions';
import './student-rewards-style.css';

const mapStateToProps = state => ({
  lvlUpInfo: state.studentPointsAndCampus,
  rewards: state.rewards.rewards,
});

const mapDispatchToProps = dispatch => bindActionCreators({ campusRewards }, dispatch);

const renderRewards = list => (
  list.map(item => (
    <Table.Row key={item.id}>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.category.category}</Table.Cell>
      <Table.Cell>{item.description}</Table.Cell>
      <Table.Cell>{item.point_cost}</Table.Cell>
      <Table.Cell>
        <a href="/student/reward-request"><Icon name="long arrow right" /></a>
      </Table.Cell>
    </Table.Row>
  ))
);

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
            {renderRewards(this.props.rewards)}
          </Table.Body>

        </Table>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RewardsTable);
