import React, { Component } from 'react';
import ChallengesTable from './challenges-table';
import ChallengesHeader from './header';
import '../admin-main-view/admin-styles.css';

class AdminChallenges extends Component {
  render() {
    return (
      <div className="lvl-table">
        <ChallengesHeader />
        <ChallengesTable />
      </div>
    );
  }
}

export default AdminChallenges;
