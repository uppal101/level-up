import React, { Component } from 'react';
import { Table, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { campusChallenges } from '../../../actions/student-challenges-actions';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  lvlUpInfo: state.studentPointsAndCampus,
  challenges: state.challenges,
});

const mapDispatchToProps = dispatch => bindActionCreators({ campusChallenges }, dispatch);

const renderTable = list => (
  list.map(item => (
    <Table.Row key={item.id}>
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
      <Table.Cell>{item.point_value}</Table.Cell>
      <Table.Cell><Link to={'/student/challenge-submission'}>lvl^</Link></Table.Cell>
    </Table.Row>
    ))
);

class StudentChallengesTable extends Component {
  componentWillMount() {
    this.props.campusChallenges(this.props.lvlUpInfo.campusId);
  }
  render() {
    if (this.props.challenges.challenges.length === 0) {
      return (<div>LOADING</div>);
    }
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Requirement</Table.HeaderCell>
            <Table.HeaderCell>Points</Table.HeaderCell>
            <Table.HeaderCell>Challenge Submission</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {renderTable(this.props.challenges.challenges)}
        </Table.Body>
      </Table>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentChallengesTable);
