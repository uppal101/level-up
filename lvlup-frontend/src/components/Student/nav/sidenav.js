import React, { Component } from 'react';
import { Menu, Icon, Image, Loader } from 'semantic-ui-react';
import './sidenav-styles.css';
import { Link } from 'react-router-dom';
import { loggingInAction, moreStudentInfo, submissionsAction, requestsAction } from '../../../actions/student-dash-actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => bindActionCreators({ loggingInAction, moreStudentInfo, submissionsAction, requestsAction }, dispatch);

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  studentPointsAndCampus: state.studentPointsAndCampus,
});

class StudentSidenav extends Component {
  componentWillMount() {
    this.props.loggingInAction()
    .then(() => {
      if (this.props.loginInfo.username) {
        this.props.moreStudentInfo(this.props.loginInfo.id);
      }
    })
    .then(() => this.props.submissionsAction(this.props.loginInfo.id))
    .then(() => this.props.requestsAction(this.props.loginInfo.id));
  }
  componentDidUpdate(prevProps) {
    if (prevProps.loginInfo.cohort_id !== this.props.loginInfo.cohort_id) {
      this.props.moreStudentInfo(this.props.loginInfo.id);
    }
  }
  render() {
    if (!this.props.loginInfo.id && !this.props.studentPointsAndCampus.currentTotal) {
      return <Loader active inline="centered"> Loading </Loader>;
    }

    return (
      <Menu inverted vertical className="studentSidenav">
        <Menu.Item><Image src={this.props.loginInfo.gravatar_url ? this.props.loginInfo.gravatar_url : this.props.loginInfo.photo_url} shape="circular" size="tiny" centered />
          <div className="userdiv">
            <h4>{this.props.loginInfo.username}</h4>
            <p>{`${this.props.studentPointsAndCampus.totalEarned}  Points Earned`}</p>
            <p> {`${this.props.studentPointsAndCampus.currentTotal} Points Remaining`}</p>
            <p>{`${this.props.studentPointsAndCampus.cohort}  ${this.props.studentPointsAndCampus.cohortType},  ${this.props.studentPointsAndCampus.location}`}</p>
          </div>
        </Menu.Item>
        <Link to={'/student/dashboard'}><Menu.Item><Icon name="dashboard" />Dashboard</Menu.Item></Link>
        <Link to={'/student/challenges'}><Menu.Item><Icon name="chevron up" />Challenges</Menu.Item></Link>
        <Link to={'/student/rewards'}><Menu.Item><Icon name="gift" />Rewards</Menu.Item></Link>
      </Menu>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentSidenav);
