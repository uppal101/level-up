import React from 'react';
import { Table, Loader } from 'semantic-ui-react';
import './dashboard-styles.css';
import { quarterConverter, quarterPointFinder, getFirstName } from '../helpers/dashboard';
import renderSubmissions from '../helpers/render-submissions';
import renderAchievements from '../helpers/render-achievements';
import renderRewardsEarned from '../helpers/render-rewards-earned';
import SignupInfo from './signup-container';
import SignUpError from './signup-error';

const StudentDashboard = (props) => {
  if (props.studentLoginInfo.error) {
    return (
      <div>
        <SignUpError />
      </div>
    );
  }
  if (!props.studentLoginInfo.name && !props.lvlUpInfo.totalEarned) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  if (!props.studentLoginInfo.cohort_id && props.submissions.submissions.length === 0) {
    return <SignupInfo />;
  }
  return (
    <div className="lvl-table">
      <h1 className="headerStudent">{`Welcome, ${getFirstName(props.studentLoginInfo.name)}!`}</h1>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="thead-secondary">Current Quarter</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary">Quarter Points</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary">Cumulative Points</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary">Remaining Points</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              {quarterConverter(props.lvlUpInfo.currentQuarter)}
            </Table.Cell>
            <Table.Cell>
              {quarterPointFinder(props.lvlUpInfo)}
            </Table.Cell>
            <Table.Cell>
              {props.lvlUpInfo.totalEarned}
            </Table.Cell>
            <Table.Cell>
              {props.lvlUpInfo.currentTotal}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="thead-sortable" textAlign="center" colSpan="3">Current Submissions</Table.HeaderCell>
            <Table.HeaderCell textAlign="center" colSpan="1" className="sort-dropdown">
              <Dropdown text="Sort">
                <Dropdown.Menu>
                  <Dropdown.Item
                    text="by Name Ascending"
                    onClick={() => props.sortSubmissionsAsc()}
                  />
                  <Dropdown.Item
                    text="by Name Descending"
                    onClick={() => props.sortSubmissionsDesc()}
                  />
                  <Dropdown.Item
                    text="by Points Ascending"
                    // onClick={() => props.()}
                  />
                  <Dropdown.Item
                    text="by Points Descending"
                    // onClick={() => props.()}
                  />
                  <Dropdown.Item
                    text="by Date Chronological"
                    onClick={() => props.sortSubmissionsChrono()}
                  />
                  <Dropdown.Item
                    text="by Date Reverse Chronological"
                    onClick={() => props.sortSubmissionsChrono()}
                  />
                </Dropdown.Menu>
              </Dropdown>
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell className="sub-head">Title</Table.HeaderCell>
            <Table.HeaderCell className="sub-head">CATEGORY</Table.HeaderCell>
            <Table.HeaderCell className="sub-head">Points</Table.HeaderCell>
            <Table.HeaderCell className="sub-head">Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {renderSubmissions(props)}
        </Table.Body>
      </Table>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="thead-sortable" textAlign="center" colSpan="4">Achievements</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell className="sub-head">Title</Table.HeaderCell>
            <Table.HeaderCell className="sub-head">CATEGORY</Table.HeaderCell>
            <Table.HeaderCell className="sub-head">Points</Table.HeaderCell>
            <Table.HeaderCell className="sub-head">Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {renderAchievements(props)}
        </Table.Body>
      </Table>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="thead-sortable" textAlign="center" colSpan="4">Rewards Earned</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell className="sub-head">Title</Table.HeaderCell>
            <Table.HeaderCell className="sub-head">CATEGORY</Table.HeaderCell>
            <Table.HeaderCell className="sub-head">Points</Table.HeaderCell>
            <Table.HeaderCell className="sub-head">Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {renderRewardsEarned(props)}
        </Table.Body>
      </Table>
    </div>
  );
};

export default StudentDashboard;
