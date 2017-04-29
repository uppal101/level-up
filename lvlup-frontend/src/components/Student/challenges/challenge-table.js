import React, { Component } from 'react';
import { Table, List } from 'semantic-ui-react';

class StudentChallengesTable extends Component {
  render() {
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
          <Table.Row>
            <Table.Cell>Tutor Session</Table.Cell>
            <Table.Cell>lvl ^ Education</Table.Cell>
            <Table.Cell>Mentor a student in a lower cohort</Table.Cell>
            <Table.Cell>
              <List bulleted>
                <List.Item>Spend an hour</List.Item>
                <List.Item>Review a current topic</List.Item>
                <List.Item>Instructor Approved</List.Item>
              </List>
            </Table.Cell>
            <Table.Cell>30</Table.Cell>
            <Table.Cell><a href="/student/challenge-submission">lvl ^</a></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Job Fair</Table.Cell>
            <Table.Cell>lvl ^ Career</Table.Cell>
            <Table.Cell>Attend a Job Fair</Table.Cell>
            <Table.Cell>
              <List bulleted>
                <List.Item>Submit a receipt or take picture</List.Item>
                <List.Item>Talk to two companies</List.Item>
                <List.Item>Career Services Approved</List.Item>
              </List>
            </Table.Cell>
            <Table.Cell>30</Table.Cell>
            <Table.Cell><a href="/student/challenge-submission">lvl ^</a></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default StudentChallengesTable;
