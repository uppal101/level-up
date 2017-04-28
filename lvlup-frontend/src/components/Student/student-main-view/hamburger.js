import React, { Component } from 'react';
import { Menu, Icon, Image } from 'semantic-ui-react';
import './student-styles.css';
import { Link } from 'react-router-dom';
import { loggingInAction, moreStudentInfo } from '../../../actions/actions';
import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => bindActionCreators({ loggingInAction, moreStudentInfo }, dispatch);

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  studentPointsAndCampus: state.studentPointsAndCampus,
});

class HamburgerStudent extends Component {
  componentWillMount() {
    this.props.loggingInAction()
    .then(() => {
      this.props.moreStudentInfo(this.props.loginInfo.id);
    });
  }

  render() {
    if (!this.props.loginInfo.username && !this.props.studentPointsAndCampus) {
      return (
        <div>LOADING</div>
      );
    }
    return (
      <Menu inverted vertical className="studentHamburger">
        <Menu.Item><Image src={this.props.loginInfo.gravatar_url ? this.props.loginInfo.gravatar_url : this.props.loginInfo.photo_url} shape="circular" size="tiny" centered />
          <div className="userdiv">
            <h4>{this.props.loginInfo.username}</h4>
            <p>{`${this.props.studentPointsAndCampus.totalEarned}Points Earned`}</p>
            <p>{`${this.props.studentPointsAndCampus.cohort}  ${this.props.studentPointsAndCampus.cohortType},  ${this.props.studentPointsAndCampus.location}`}</p>
          </div>
        </Menu.Item>
        <Link to={'/student/dashboard'}><Menu.Item><Icon name="dashboard" />Dashboard</Menu.Item></Link>
        <Link to={'/student/challenges'}><Menu.Item><Icon name="chevron up" />Challenges</Menu.Item></Link>
        <Menu.Item><Icon name="gift" />Rewards</Menu.Item>
      </Menu>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerStudent);
