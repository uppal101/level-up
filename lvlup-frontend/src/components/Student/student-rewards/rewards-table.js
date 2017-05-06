import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Icon, Table, Container } from 'semantic-ui-react';
import { campusRewards, selectReward, resetRequest } from '../../../actions/student-rewards-actions';
import './student-rewards-style.css';

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
    return list.map(item => (
      <Table.Row key={`${item.id}rewards-table-student`}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.category.category}</Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell>{item.point_cost}</Table.Cell>
        <Table.Cell>
          <Link to={`/student/reward-request/${item.id}`}>
            <Icon onClick={() => this.props.selectReward(item)} name="long arrow right" />
          </Link>
        </Table.Cell>
      </Table.Row>
  ));
  }

  render() {
    if (this.props.rewards.rewards.length === 0) {
      return (<div>LOADING</div>);
    }
    return (
      <Container>
        <Table celled color="orange">
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
            {this.renderRewards(this.props.rewards.rewards)}
          </Table.Body>

        </Table>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RewardsTable);
