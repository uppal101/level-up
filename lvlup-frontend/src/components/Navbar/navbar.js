import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import '../Home/homeview.css';
import LoginModal from './login-modal';
import LogOutGithub from './logout-student-container';
import LogOutAdmin from './logout-admin-container';
import renderIf from 'render-if';
import { Link } from 'react-router-dom';

const NavBar = props => (
  <Menu secondary size="small" className="nav">
    <Menu.Item className="center" header>
      {renderIf(!props.loginInfo.status && !props.loggedIn.status)(
        <Link to={'/'}><div className="hamburger" id="nova-font">lvl^</div></Link>,
      )}
      {renderIf(props.loginInfo.status)(
        <Link to={'/student/dashboard'}><div className="hamburger" id="nova-font">lvl^</div></Link>,
      )}
      {renderIf(props.loggedIn.status)(
        <Link to={'/admin/dashboard'}><div className="hamburger" id="nova-font">lvl^</div></Link>,
      )}
    </Menu.Item>
    <Menu.Item className="right">
      {renderIf(!props.loginInfo.status && !props.loggedIn.status)(
        <LoginModal />,
      )}
      {renderIf(props.loginInfo.status)(
        <LogOutGithub />,
      )}
      {renderIf(props.loggedIn.status)(
        <LogOutAdmin />,
      )}
    </Menu.Item>
  </Menu>
);

export default NavBar;
