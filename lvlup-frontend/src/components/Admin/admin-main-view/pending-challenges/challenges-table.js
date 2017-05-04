import React, { Component } from 'react';
import { Icon, Menu, Table, Container } from 'semantic-ui-react';
import '../admin-styles.css';
// arbitrary
class ChallengesTable extends Component {
  render() {
    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Date Submitted</Table.HeaderCell>
              <Table.HeaderCell>View</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Thomas</Table.Cell>
              <Table.Cell>Article</Table.Cell>
              <Table.Cell>4/17/17</Table.Cell>
              <Table.Cell><a href="/admin/individual-pending-challenge"><Icon name="eye" /></a></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Daniel</Table.Cell>
              <Table.Cell>Breakout Session</Table.Cell>
              <Table.Cell>5/07/17</Table.Cell>
              <Table.Cell><a href="/admin/individual-pending-challenge"><Icon name="eye" /></a></Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="4">
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
