import React, { Component } from 'react';
import { Table, Loader } from 'semantic-ui-react';
import './dashboard-styles.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { quarterConverter, quarterPointFinder, formatDate, getFirstName } from '../../../helpers/dashboard';
import SignupInfo from '../nav/student-signup';
import { submissionsAction } from '../../../actions/student-dash-actions';
import SignUpError from '../nav/signup-error';

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  lvlUpInfo: state.studentPointsAndCampus,
  submissions: state.submissions,
  requests: state.requests,
  submission: state.submissionChallenge,
});

const mapDispatchToProps = dispatch => bindActionCreators({ submissionsAction }, dispatch);


const renderSubmissions = list => (
  list.filter(submission => submission.submission_status !== 'Approved').map((item) => {
    if (item.submission_status === 'Denied') {
      return (
        <Table.Row negative key={`${item.id}student-dashboard1`}>
          <Table.Cell>{item.challenge.name}</Table.Cell>
          <Table.Cell>{item.category.category}</Table.Cell>
          <Table.Cell>{item.challenge.point_value}</Table.Cell>
          <Table.Cell>{formatDate(item.created_at)}</Table.Cell>
        </Table.Row>
      );
    }
    return (
      <Table.Row key={`${item.id}student-dashboard2`}>
        <Table.Cell>{item.challenge.name}</Table.Cell>
        <Table.Cell>{item.category.category}</Table.Cell>
        <Table.Cell>{item.challenge.point_value}</Table.Cell>
        <Table.Cell>{formatDate(item.created_at)}</Table.Cell>
      </Table.Row>
    );
  })
);

const renderAchievements = list => (
  list.filter(submission => submission.submission_status === 'Approved').map(item => (
    <Table.Row key={`${item.id}student-dashboard3`}>
      <Table.Cell>{item.challenge.name}</Table.Cell>
      <Table.Cell>{item.category.category}</Table.Cell>
      <Table.Cell>{item.challenge.point_value}</Table.Cell>
      <Table.Cell>{formatDate(item.created_at)}</Table.Cell>
    </Table.Row>
  ))
);

const renderRewardsEarned = list => (
  list.filter(request => request.status === 'Approved').map(item => (
    <Table.Row key={`${item.id}student-dashboard4`}>
      <Table.Cell>{item.reward.name}</Table.Cell>
      <Table.Cell>{item.category.category}</Table.Cell>
      <Table.Cell>{item.reward.point_cost}</Table.Cell>
      <Table.Cell>{formatDate(item.created_at)}</Table.Cell>
    </Table.Row>
  ))
);

export class StudentDashboard extends Component {
  componentWillMount() {
    if (this.props.loginInfo.id) {
      this.props.submissionsAction(this.props.loginInfo.id);
    }
  }
  render() {
    if (this.props.loginInfo.error) {
      return (
        <div>
          <SignUpError />
        </div>
      );
    }
    if (!this.props.loginInfo.name && !this.props.lvlUpInfo.totalEarned) {
      return <Loader active inline="centered"> Loading </Loader>;
    }
    if (!this.props.lvlUpInfo.currentQuarter && this.props.submissions.submissions.length === 0) {
      return <SignupInfo />;
    }
    return (
      <div className="lvl-table">
        <h1 className="headerStudent">{`Welcome, ${getFirstName(this.props.loginInfo.name)}!`}</h1>
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
                {quarterConverter(this.props.lvlUpInfo.currentQuarter)}
              </Table.Cell>
              <Table.Cell>
                {quarterPointFinder(this.props.lvlUpInfo)}
              </Table.Cell>
              <Table.Cell>
                {this.props.lvlUpInfo.totalEarned}
              </Table.Cell>
              <Table.Cell>
                {this.props.lvlUpInfo.currentTotal}
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
            {renderSubmissions(this.props.submissions.submissions)}
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
            {renderAchievements(this.props.submissions.submissions)}
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
            {renderRewardsEarned(this.props.requests.requests)}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
