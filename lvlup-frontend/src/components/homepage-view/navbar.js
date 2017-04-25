import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import './homeview.css';
// import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <Menu size="massive" className="nav">
        <Menu.Item className="left" header><div className="name">lvl^</div></Menu.Item>
        <Menu.Item className="right">
          <Button color="grey">
            <Icon name="github" /> Log In or Sign Up with Github
          </Button>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
