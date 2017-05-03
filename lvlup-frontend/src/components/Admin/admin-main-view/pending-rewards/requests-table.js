import React, { Component } from 'react';
import { Icon, Menu, Table, Popup, Container } from 'semantic-ui-react';
import '../admin-styles.css';

class RequestsTable extends Component {
  render() {
    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Reward</Table.HeaderCell>
              <Table.HeaderCell>Date Submitted</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
              <Table.HeaderCell>Approve</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Sanjeet</Table.Cell>
              <Table.Cell>Pizza Party</Table.Cell>
              <Table.Cell>6/01/17</Table.Cell>
              <Table.Cell>
                <Popup
                  trigger={<Icon circular name="comments" />}
                  wide
                > No Veggie Pizza
                </Popup>
              </Table.Cell>
              <Table.Cell><Icon name="close" /> <Icon name="checkmark" /></Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="5">
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

export default RequestsTable;
