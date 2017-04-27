import React, { Component } from 'react';
import { Icon, Table } from 'semantic-ui-react';
import '../student-main-view/student-styles.css';

class StudentDashboard extends Component {
  render() {
    return (
      <div className="studentDashboard">
        <h1 className="headerStudent">Welcome, Daniel Gardner</h1>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Current Quarter</Table.HeaderCell>
              <Table.HeaderCell>Quarter Points</Table.HeaderCell>
              <Table.HeaderCell>Cumulative Points</Table.HeaderCell>
              <Table.HeaderCell>Remaining Points</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                Quarter 3
              </Table.Cell>
              <Table.Cell>
                250 points
              </Table.Cell>
              <Table.Cell>
                275 points
              </Table.Cell>
              <Table.Cell>
                250 points
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="4">Current Submissions</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Catagory</Table.HeaderCell>
              <Table.HeaderCell>Points</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row positive>
              <Table.Cell>
                Build A Side Project
              </Table.Cell>
              <Table.Cell>
                Career
              </Table.Cell>
              <Table.Cell>
                250 points
              </Table.Cell>
              <Table.Cell>
                4/26/17
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                Build A Side Project
              </Table.Cell>
              <Table.Cell>
                Career
              </Table.Cell>
              <Table.Cell>
                250 points
              </Table.Cell>
              <Table.Cell>
                4/26/17
              </Table.Cell>
            </Table.Row>
            <Table.Row positive>
              <Table.Cell>
                Mentor A Student
              </Table.Cell>
              <Table.Cell>
                Education
              </Table.Cell>
              <Table.Cell>
                25 points
              </Table.Cell>
              <Table.Cell>
                4/26/17
              </Table.Cell>
            </Table.Row>
            <Table.Row negative>
              <Table.Cell>
                Lead a Breakout Session
              </Table.Cell>
              <Table.Cell>
                Education
              </Table.Cell>
              <Table.Cell>
                25 points
              </Table.Cell>
              <Table.Cell>
                4/26/17
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="4">Achievements</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Catagory</Table.HeaderCell>
              <Table.HeaderCell>Points</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row positive>
              <Table.Cell>
                Mentor A Student
              </Table.Cell>
              <Table.Cell>
                Education
              </Table.Cell>
              <Table.Cell>
                25 points
              </Table.Cell>
              <Table.Cell>
                4/26/17
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="4">Rewards Earned</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Catagory</Table.HeaderCell>
              <Table.HeaderCell>Points</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                $5 Gather Cafe Gift Card
              </Table.Cell>
              <Table.Cell>
                Life
              </Table.Cell>
              <Table.Cell>
                25 points
              </Table.Cell>
              <Table.Cell>
                4/26/17
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default StudentDashboard;
