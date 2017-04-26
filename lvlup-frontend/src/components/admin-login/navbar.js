import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';


class Navbar extends Component {
  render() {
    return (
      <Menu size="massive" className="nav">
        <Menu.Item className="left" header><div className="name">lvl^</div></Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
