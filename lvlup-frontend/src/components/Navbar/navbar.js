import React from 'react';
import { Menu } from 'semantic-ui-react';
import renderIf from 'render-if';
import { Link } from 'react-router-dom';
import '../Home/homeview.css';
import LoginModal from './login-modal';
import LogOutGithub from './logout-student-container';
import LogOutAdmin from './logout-admin-container';

const NavBar = props => (
  <Menu secondary size="small" className="nav">
    <Menu.Item className="center" header>
      {renderIf(!props.studentLoginInfo.status && !props.adminLoginInfo.status)(
        <Link to={'/'}><div className="hamburger" id="nova-font">lvl^</div></Link>,
      )}
      {renderIf(props.studentLoginInfo.status)(
        <Link to={'/student/dashboard'}><div className="hamburger" id="nova-font">lvl^</div></Link>,
      )}
      {renderIf(props.adminLoginInfo.status)(
        <Link to={'/admin/dashboard'}><div className="hamburger" id="nova-font">lvl^</div></Link>,
      )}
    </Menu.Item>
    <Menu.Item className="right">
      {renderIf(!props.studentLoginInfo.status && !props.adminLoginInfo.status)(
        <LoginModal />,
      )}
      {renderIf(props.studentLoginInfo.status)(
        <LogOutGithub />,
      )}
      {renderIf(props.adminLoginInfo.status)(
        <LogOutAdmin />,
      )}
    </Menu.Item>
  </Menu>
);

export default NavBar;
