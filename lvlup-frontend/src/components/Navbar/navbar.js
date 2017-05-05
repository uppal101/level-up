import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import '../Home/homeview.css';
import { connect } from 'react-redux';
import LoginGithub from './login-github';
import LogOutGithub from './logout-student';
import LogOutAdmin from './logout-admin';
import renderIf from 'render-if';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  loginInfo: state.loginInfo,
});

class NavBar extends Component {
  render() {
    return (
      <Menu size="massive" className="nav">
        <Menu.Item className="left" header><div className="name">lvl^</div></Menu.Item>
        <Menu.Item className="right">
          {renderIf(this.props.loginInfo.status === false && this.props.loggedIn.status === false)(
            <LoginGithub />,
          )}
          {renderIf(this.props.loginInfo.status === true)(
            <LogOutGithub />,
          )}
          {renderIf(this.props.loggedIn.status === true)(
            <LogOutAdmin />,
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

export default connect(mapStateToProps)(NavBar);
