import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import './homepage-view/homeview.css';
// import { Link } from 'react-router-dom';

class NavBarLoggedIn extends Component {
  render() {
    return (
      <Menu size="massive" className="nav">
        <Menu.Item className="left" header><div className="name">lvl^</div></Menu.Item>
        <Menu.Item className="right">
          <Button color="grey">
            Log Out
          </Button>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBarLoggedIn;
