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
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" colSpan="4">Current Submissions</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Catagory</Table.HeaderCell>
            <Table.HeaderCell>Points</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {renderSubmissions(props)}
        </Table.Body>
      </Table>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" colSpan="4">Achievements</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Catagory</Table.HeaderCell>
            <Table.HeaderCell>Points</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {renderAchievements(props)}
        </Table.Body>
      </Table>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" colSpan="4">Rewards Earned</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Catagory</Table.HeaderCell>
            <Table.HeaderCell>Points</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
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
