import React, { Component } from 'react';
import { Menu, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submissionsAction, requestsAction } from '../../../actions/admin-dash-actions';
import './admin-nav.css';

export const mapDispatchToProps = dispatch => bindActionCreators({
  submissionsAction, requestsAction,
}, dispatch);

export const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  pendingSubmissions: state.adminPendingSubmissions,
  pendingRequests: state.adminPendingRequests,
  selectedChallenge: state.selectedChallenge,
});

export class HamburgerAdmin extends Component {
  render() {
    if (!this.props.loggedIn.username) {
      return (
        <div>LOADING</div>
      );
    }
    return (
      <div className="sidenav-container">
        <Menu inverted vertical className="adminHamburger">
          <Menu.Item><Image src={this.props.loggedIn.gravatar_url ? this.props.loggedIn.gravatar_url : 'https://media.glassdoor.com/sqll/825775/galvanize-squarelogo-1429039425588.png'} shape="circular" size="tiny" alt={this.props.loggedIn.name} centered />
            <div className="userdiv">
              <h4>{this.props.loggedIn.username}</h4>
            </div>
          </Menu.Item>
          <Link to={'/admin/dashboard'}><Menu.Item><Icon name="dashboard" />Dashboard</Menu.Item></Link>
          <Link to={'/admin/challenges'}><Menu.Item><Icon name="chevron up" />Challenges</Menu.Item></Link>
          <Link to={'/admin/rewards'}><Menu.Item><Icon name="gift" />Rewards</Menu.Item></Link>
          <Link to={'/admin/configuration'}><Menu.Item><Icon name="setting" />Configuration</Menu.Item></Link>
        </Menu>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerAdmin);
