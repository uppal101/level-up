import React, { Component } from 'react';
import HamburgerAdmin from '../admin-common/hamburger';
import ChallengesTable from './challenges-table';
import ChallengesHeader from './header';
import AddButton from './button';


class AdminChallenges extends Component {
  render() {
    return (
      <div>
        <HamburgerAdmin />
        <div className="challenges">
          <ChallengesHeader />
          <ChallengesTable />
          <AddButton />
        </div>
      </div>
    );
  }
}

export default AdminChallenges;
