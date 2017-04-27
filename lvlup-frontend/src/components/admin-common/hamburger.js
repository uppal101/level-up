import React, { Component } from 'react';
import { Menu, Icon, Image } from 'semantic-ui-react';
import './admin-nav.css';

class HamburgerStudent extends Component {

  render() {
    return (
      <Menu inverted vertical className="adminHamburger">
        <Menu.Item><Image src="" shape="circular" size="tiny" alt="Mary Ann" centered />
          <div className="userdiv">
            <h4>tweetordie</h4>
          </div>
        </Menu.Item>
        <Menu.Item><Icon name="dashboard" />Dashboard</Menu.Item>
        <Menu.Item><Icon name="chevron up" /><a href="admin/challenges">Challenges</a></Menu.Item>
        <Menu.Item><Icon name="gift" /><a href="admin/rewards">Rewards</a></Menu.Item>
        <Menu.Item><Icon name="setting" />Configuration</Menu.Item>
      </Menu>
    );
  }
}

export default HamburgerStudent;
