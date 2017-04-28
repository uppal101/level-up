import React, { Component } from 'react';
import StudentChallengesTable from './challenge-table';
import { Button } from 'semantic-ui-react';
import '../student-main-view/student-styles.css';

class StudentChallenges extends Component {
  render() {
    return (
      <div>
        <div className="studentDashboard">
          <h1 className="headerStudent">Welcome, Daniel Gardner</h1>
          <StudentChallengesTable />
          <Button>Click Here to lvl^</Button>
        </div>
      </div>
    );
  }
}

export default StudentChallenges;
