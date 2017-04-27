import React, { Component } from 'react';
import { Menu, Icon, Image } from 'semantic-ui-react';
import './student-styles.css';

class HamburgerStudent extends Component {

  render() {
    return (
      <Menu inverted vertical className="studentHamburger">
        <Menu.Item><Image src="https://avatars2.githubusercontent.com/u/22782154?v=3" shape="circular" size="tiny" centered />
          <div className="userdiv">
            <h4>dan_m_g</h4>
            <p>250 points</p>
            <p>G42, San Francisco</p>
          </div>
        </Menu.Item>
        <Menu.Item><Icon name="dashboard" />Dashboard</Menu.Item>
        <Menu.Item><Icon name="chevron up" />Challenges</Menu.Item>
        <Menu.Item><Icon name="gift" />Rewards</Menu.Item>
      </Menu>
    );
  }
}

export default HamburgerStudent;
