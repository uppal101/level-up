import React, { Component } from 'react';
import HamburgerStudent from './hamburger';
import NavBarLoggedIn from '../navbar-loggedin';
import StudentDashboard from './student-dashboard';
import { loggingInAction } from '../../actions/actions';
import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loggingInAction }, dispatch);

class StudentHome extends Component {
  componentWillMount() {
    this.props.loggingInAction();
  }
  render() {
    if (!this.props.loginInfo.id) {
      return (<div>LOADING</div>);
    }
    return (
      <div>
        <NavBarLoggedIn />
        <HamburgerStudent />
        <div className="studentDashboard">
          <h1 className="headerStudent">Welcome, Daniel Gardner</h1>
          <StudentDashboard />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentHome);
