import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon, Table, Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { campusRewards, selectReward } from '../../../actions/student-rewards-actions';
import { resetEditReward } from '../../../actions/edit-reward';
import { resetAddReward } from '../../../actions/add-reward';
import './admin-rewards-style.css';

const mapStateToProps = state => ({
  adminInfo: state.loggedIn,
  rewards: state.rewards.rewards,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  campusRewards, selectReward, resetEditReward, resetAddReward }, dispatch);

class RewardsTable extends Component {
  constructor(props) {
    super(props);
    this.renderRewards = this.renderRewards.bind(this);
  }

  componentWillMount() {
    this.props.campusRewards(this.props.adminInfo.campus_id);
    this.props.resetEditReward();
    this.props.resetAddReward();
  }

  renderRewards(list) {
    return list.map(item => (
      <Table.Row key={`${item.id}rewards-table-admin`}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.category.category}</Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell textAlign="center">
          <Link to={`/admin/reward-edit/${item.id}`}>
            <Icon color="orange" onClick={() => this.props.selectReward(item)} name="pencil" /></Link>
        </Table.Cell>
        <Table.Cell textAlign="center"><Icon onClick={() => this.props.selectReward(item)} name="trash" /></Table.Cell>
        <Table.Cell textAlign="center">{item.point_cost}</Table.Cell>
      </Table.Row>
    ));
  }

  render() {
    if (this.props.rewards.length === 0) {
      return (<div>LOADING</div>);
    }
    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Edit</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Remove</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Points</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderRewards(this.props.rewards)}
          </Table.Body>

        </Table>
        <Link to="/admin/reward-add"><Button basic color="orange" content="Add Reward" /></Link>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RewardsTable);
