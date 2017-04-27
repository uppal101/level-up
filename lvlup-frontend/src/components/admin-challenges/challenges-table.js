import React, { Component } from 'react';
import { Icon, Menu, Table, Grid, Container } from 'semantic-ui-react';
// import '../admin-styles.css';

class ChallengesTable extends Component {
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
            <Table.Row>
              <Table.Cell>Tutor Session</Table.Cell>
              <Table.Cell>lvl ^ Education</Table.Cell>
              <Table.Cell>Description</Table.Cell>
              <Table.Cell><a href="/admin/challenge-edit"><Icon name="pencil" /></a></Table.Cell>
              <Table.Cell><Icon name="trash" /></Table.Cell>
              <Table.Cell>30</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Job Fair</Table.Cell>
              <Table.Cell>lvl ^ Career</Table.Cell>
              <Table.Cell>Description</Table.Cell>
              <Table.Cell><a href="/admin/challenge-edit"><Icon name="pencil" /></a></Table.Cell>
              <Table.Cell><Icon name="trash" /></Table.Cell>
              <Table.Cell>30</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="6">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="left chevron" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="right chevron" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
    );
  }
}

export default ChallengesTable;
