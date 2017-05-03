import React, { Component } from 'react';
import { Icon, Menu, Table, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './admin-challenges-style.css';

class ChallengesTable extends Component {
  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
  }

  componentWillMount() {
    this.props.campusChallenges();
  }
  renderTable(list) {
    return list.map(item => (
      <Table.Row key={item.id}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.category.category}</Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell onClick{() => this.props.editChallenge(item)}><Link to =`/admin/challenge-edit/${item.id}`><Icon name="pencil" /></Link></Table.Cell>
        <Table.Cell><Icon name="trash" /></Table.Cell>
        <Table.Cell>{item.point_value}</Table.Cell>
      </Table.Row>
    ));
  }
  render() {
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

export default ChallengesTable;
