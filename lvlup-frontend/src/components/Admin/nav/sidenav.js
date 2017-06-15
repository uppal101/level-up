import React from 'react';
import { Menu, Icon, Image, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './sidenav-styles.css';

const AdminSidenav = (props) => {
  if (!props.loggedIn.username) {
    return (
      <Loader active inline="centered"> Loading </Loader>
    );
  }
  return (
    <Menu inverted vertical className="adminSidenav">
      <Menu.Item id="admin-sidenav-info"><Image src={props.loggedIn.gravatar_url ? props.loggedIn.gravatar_url : 'https://ucarecdn.com/d50ece0e-f5e1-47fd-a492-d8561fe02ebb/'} shape="circular" size="tiny" alt={props.loggedIn.name} centered />
        <div className="userdiv">
          <h4>{props.loggedIn.username}</h4>
        </div>
      </Menu.Item>
      <Link to={'/admin/dashboard'}><Menu.Item><Icon name="dashboard" />Dashboard</Menu.Item></Link>
      <Link to={'/admin/challenges'}><Menu.Item><Icon name="chevron up" />Challenges</Menu.Item></Link>
      <Link to={'/admin/rewards'}><Menu.Item><Icon name="gift" />Rewards</Menu.Item></Link>
      <Link to={'/admin/configuration'}><Menu.Item><Icon name="setting" />Configuration</Menu.Item></Link>
    </Menu>
  );
};

export default AdminSidenav;
