import React, { Component } from 'react';
import { Table, List, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { campusChallenges, selectChallenge, resetChallenge } from '../../../actions/student-challenges-actions';

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  lvlUpInfo: state.studentPointsAndCampus,
  challenges: state.challenges,
});

const mapDispatchToProps = dispatch => bindActionCreators({ campusChallenges, selectChallenge, resetChallenge }, dispatch);


class StudentChallengesTable extends Component {
  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
  }

  componentWillMount() {
    this.props.campusChallenges(this.props.lvlUpInfo.campusId);
    this.props.resetChallenge();
  }

  renderTable(list) {
    return list.filter(challenges => challenges.active === 'Active').map(item => (
      <Table.Row key={`${item.id}challenges-table-student`}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.category.category}</Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell>
          {item.requirements_1 ? <List bulleted>
            <List.Item>{item.requirements_1}</List.Item>
            {item.requirements_2 ? <List.Item>{item.requirements_2}</List.Item> : null}
            {item.requirements_3 ? <List.Item>{item.requirements_3}</List.Item> : null}
            {item.requirements_4 ? <List.Item>{item.requirements_4}</List.Item> : null}
            {item.requirements_5 ? <List.Item>{item.requirements_5}</List.Item> : null}
          </List> : 'No requirements!'}
        </Table.Cell>
        <Table.Cell textAlign="center">{item.point_value}</Table.Cell>
        <Table.Cell className="lvl-link" textAlign="center" onClick={() => this.props.selectChallenge(item)}><Link to={`/student/challenge-submission/${item.id}`}>lvl^</Link></Table.Cell>
      </Table.Row>
      ));
  }

  render() {
    if (this.props.challenges.challenges.length === 0) {
      return <Loader active inline="centered"> Loading </Loader>;
    }
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" colSpan="6">Challenges Available</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Requirement</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Points</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Submit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.renderTable(this.props.challenges.challenges)}
        </Table.Body>
      </Table>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentChallengesTable);
