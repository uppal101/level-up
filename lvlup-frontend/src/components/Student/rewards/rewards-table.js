import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Icon, Table, Container, Loader } from 'semantic-ui-react';
import { campusRewards, selectReward, resetRequest } from '../../../actions/student-rewards-actions';

const mapStateToProps = state => ({
  lvlUpInfo: state.studentPointsAndCampus,
  rewards: state.rewards,
});

const mapDispatchToProps = dispatch => bindActionCreators({ campusRewards, resetRequest, selectReward }, dispatch);


class RewardsTable extends Component {
  constructor(props) {
    super(props);
    this.renderRewards = this.renderRewards.bind(this);
  }

  componentWillMount() {
    this.props.campusRewards(this.props.lvlUpInfo.campusId);
    this.props.resetRequest();
  }

  renderRewards(list) {
    return list.filter(reward => reward.active === 'Active').map(item => (
      <Table.Row key={`${item.id}rewards-table-student`}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.category.category}</Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell textAlign="center">{item.point_cost}</Table.Cell>
        <Table.Cell textAlign="center">
          <Link to={`/student/reward-request/${item.id}`}>
            <Icon color="orange" onClick={() => this.props.selectReward(item)} name="long arrow right" />
          </Link>
        </Table.Cell>
      </Table.Row>
  ));
  }

  render() {
    if (this.props.rewards.rewards.length === 0) {
      return <Loader active inline="centered"> Loading </Loader>;
    }
    return (
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
            {this.renderRewards(this.props.rewards.rewards)}
          </Table.Body>

        </Table>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RewardsTable);
