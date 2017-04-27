import React, { Component } from 'react';
import HamburgerStudent from './hamburger';
import StudentDashboard from '../dashboard/student-dashboard';
import { loggingInAction } from '../../../actions/actions';
import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './student-styles.css';


const mapDispatchToProps = dispatch => bindActionCreators({ loggingInAction }, dispatch);

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
});

class StudentHome extends Component {
  // componentWillMount() {
  //   this.props.loggingInAction();
  // }
  render() {
    // if (!this.props.loginInfo.id) {
    //   return (<div>LOADING</div>);
    // }
    return (
      <div>
        <div className="studentDashboard">
          <h1 className="headerStudent">Welcome, Daniel Gardner</h1>
          <StudentDashboard />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentHome);
