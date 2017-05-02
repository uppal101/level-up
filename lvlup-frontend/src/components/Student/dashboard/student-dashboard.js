import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import '../student-main-view/student-styles.css';
import { connect } from 'react-redux';
<<<<<<< HEAD
// import { bindActionCreators } from 'redux';
import { quarterConverter, quarterPointFinder } from '../../../helpers/dashboard';
=======
import { bindActionCreators } from 'redux';
import { quarterConverter, quarterPointFinder, formatDate } from '../../../helpers/dashboard';
import renderIf from 'render-if';
>>>>>>> d778d23295c8c097d3cbd64d961387c70a5050a9

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  lvlUpInfo: state.studentPointsAndCampus,
  submissions: state.submissions.submissions,
  requests: state.requests.requests,
});

const renderSubmissions = list => (
  list.filter(submission => submission.submission_status !== 'Approved').map((item) => {
    if (item.submission_status === 'Denied') {
      return (
        <Table.Row negative key={item.id}>
          <Table.Cell>{item.challenge.name}</Table.Cell>
          <Table.Cell>{item.category.category}</Table.Cell>
          <Table.Cell>{item.challenge.point_value}</Table.Cell>
          <Table.Cell>{formatDate(item.created_at)}</Table.Cell>
        </Table.Row>
      );
    }
    return (
      <Table.Row key={item.id}>
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
    <Table.Row key={item.id}>
      <Table.Cell>{item.challenge.name}</Table.Cell>
      <Table.Cell>{item.category.category}</Table.Cell>
      <Table.Cell>{item.challenge.point_value}</Table.Cell>
      <Table.Cell>{formatDate(item.created_at)}</Table.Cell>
    </Table.Row>
  ))
);

const renderRewardsEarned = list => (
  list.filter(request => request.status === 'Approved').map(item => (
    <Table.Row key={item.id}>
      <Table.Cell>{item.reward.name}</Table.Cell>
      <Table.Cell>{item.category.category}</Table.Cell>
      <Table.Cell>{item.reward.point_cost}</Table.Cell>
      <Table.Cell>{formatDate(item.created_at)}</Table.Cell>
    </Table.Row>
  ))
);

class StudentDashboard extends Component {
  render() {
    console.log(this.props.submissions);
    console.log(this.props.requests);
    if (!this.props.lvlUpInfo.currentQuarter && this.props.submissions.length === 0) {
      return (<div>LOADING</div>);
    }
    return (
      <div className="studentDashboard">
        <h1 className="headerStudent">{`Welcome ${this.props.loginInfo.name}`}</h1>
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
            {renderSubmissions(this.props.submissions.submissions)}
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
            {renderAchievements(this.props.submissions)}
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
            {renderRewardsEarned(this.props.requests)}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(StudentDashboard);
