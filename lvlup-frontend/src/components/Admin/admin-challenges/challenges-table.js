import React, { Component } from 'react';
import { Icon, Table, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { campusChallenges, selectChallenge } from '../../../actions/student-challenges-actions';
import './admin-challenges-style.css';

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  lvlUpInfo: state.studentPointsAndCampus,
  challenges: state.challenges,
});

const mapDispatchToProps = dispatch => bindActionCreators({ campusChallenges, selectChallenge }, dispatch);

class ChallengesTable extends Component {
  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
  }

  componentWillMount() {
    this.props.campusChallenges(this.props.lvlUpInfo.campusId);
  }
  renderTable(list) {
    return list.map(item => (
      <Table.Row key={item.id}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.category.category}</Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell onClick={() => this.props.editChallenge(item)}>
          <Link to={`/admin/challenge-edit/${item.id}`}>
            <Icon name="pencil" />
          </Link>
        </Table.Cell>
        <Table.Cell><Icon name="trash" /></Table.Cell>
        <Table.Cell>{item.point_value}</Table.Cell>
      </Table.Row>
    ));
  }
  render() {
    if (this.props.challenges.challenges.length === 0) {
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
              <Table.HeaderCell>Edit</Table.HeaderCell>
              <Table.HeaderCell>Remove</Table.HeaderCell>
              <Table.HeaderCell>Points</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderTable(this.props.challenges.challenges)}
          </Table.Body>

        </Table>
      </Container>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChallengesTable);
