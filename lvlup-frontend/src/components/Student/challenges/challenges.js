import React, { Component } from 'react';
import StudentChallengesTable from './challenge-table';
import '../student-main-view/student-styles.css';

class StudentChallenges extends Component {
  render() {
    return (
      <div>
        <div className="studentDashboard">
          <h1>Student Challenges Available</h1>
          <StudentChallengesTable />
        </div>
      </div>
    );
  }
}

export default StudentChallenges;
