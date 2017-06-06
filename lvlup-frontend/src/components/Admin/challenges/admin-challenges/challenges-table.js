import React, { Component } from 'react';
import { Icon, Table, Container, Button, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { resetEditChallenge, makeChallengeInactive } from '../../../../actions/edit-challenge';
import { resetAddChallenge } from '../../../../actions/add-challenge';
import { campusChallenges, selectChallenge } from '../../../../actions/student-challenges-actions';
import { submissionsAction } from '../../../../actions/admin-dash-actions';
import { resetChallengeList } from '../../../../actions/reset-actions';
import './challenges-style.css';

const mapStateToProps = state => ({
  adminInfo: state.loggedIn,
  challenges: state.challenges,
  selectedChallenge: state.selectedChallenge,
});


const mapDispatchToProps = dispatch => bindActionCreators({ campusChallenges, selectChallenge, resetEditChallenge, submissionsAction, resetAddChallenge, makeChallengeInactive, resetChallengeList }, dispatch);


class ChallengesTable extends Component {
  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
  }

  componentWillMount() {
    this.props.campusChallenges(this.props.adminInfo.campus_id);
    this.props.resetEditChallenge();
    this.props.resetAddChallenge();
  }

  renderTable(list) {
    return list.filter(challenges => challenges.active === 'Active').map(item => (
      <Table.Row key={item.id}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.category.category}</Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell textAlign="center" onClick={() => this.props.selectChallenge(item)}>
          <Link to={`/admin/challenge-edit/${item.id}`}>
            <Icon color="orange" name="pencil" />
          </Link>
        </Table.Cell>
        <Table.Cell textAlign="center"><Icon
          id="hover-icon"
          name="trash"
          onClick={() => this.props.makeChallengeInactive(item).then(() => {
            this.props.resetChallengeList();
            this.props.campusChallenges(this.props.adminInfo.campus_id);
          })}
        /></Table.Cell>
        <Table.Cell textAlign="center">{item.point_value}</Table.Cell>
      </Table.Row>
    ));
  }
  render() {
    if (this.props.challenges.challenges.length === 0) {
      return (<Loader active inline="centered"> Loading </Loader>);
    }
    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="6">Challenges</Table.HeaderCell>
            </Table.Row>
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
            {this.renderTable(this.props.challenges.challenges)}
          </Table.Body>

        </Table>
        <Link to="/admin/challenge-add"><Button basic color="orange" content="Add Challenge" /></Link>
      </Container>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChallengesTable);
