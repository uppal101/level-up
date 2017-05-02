import React, { Component } from 'react';
import { Menu, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './admin-nav.css';

const mapDispatchToProps = dispatch => bindActionCreators({
  loggingInAction, adminInfo, pendingSubmissions, pendingRequests,
}, dispatch);

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
  adminInfo: state.adminInfo,
});

class HamburgerAdmin extends Component {
  componentWillMount() {
    this.props.loggingInAction()
    .then(() =>
    this.props.adminInfo(this.props.loginInfo.id));
  }
  render() {
    if (!this.props.loginInfo.username) {
      return {
        <div>LOADING</div>
      }
    }
    return (
      <Menu inverted vertical className="adminHamburger">
        <Menu.Item><Image src={this.props.loginInfo.gravatar_url ? this.props.loginInfo : undefined} shape="circular" size="tiny" alt={this.props.loginInfo.name} centered />
          <div className="userdiv">
            <h4>{this.props.loginInfo.username}</h4>
          </div>
        </Menu.Item>
        <Link to={'/admin/dashboard'}><Menu.Item><Icon name="dashboard" />Dashboard</Menu.Item></Link>
        <Link to={'/admin/challenges'}><Menu.Item><Icon name="chevron up" />Challenges</Menu.Item></Link>
        <Link to={'/admin/rewards'}><Menu.Item><Icon name="gift" />Rewards</Menu.Item></Link>
        <Link to={'/admin/configuration'}><Menu.Item><Icon name="setting" />Configuration</Menu.Item></Link>
      </Menu>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerAdmin);
