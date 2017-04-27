import React, { Component } from 'react';
import ChallengesTable from '../../Admin/admin-challenges/challenges-table';
import HamburgerStudent from '../student-main-view/student-main';
import '../student-main-view/student-styles.css';

class StudentChallenges extends Component {
  render() {
    return (
      <div>
        {/* <NavBarLoggedIn />
        <HamburgerStudent /> */}
        <div className="studentDashboard">
          <h1 className="headerStudent">Welcome, Daniel Gardner</h1>
          <ChallengesTable />
        </div>
      </div>
    );
  }
}

export default StudentChallenges;
