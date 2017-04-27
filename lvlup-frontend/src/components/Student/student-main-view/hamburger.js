import React, { Component } from 'react';
import { Menu, Icon, Image } from 'semantic-ui-react';
import './student-styles.css';
import { Link } from 'react-router-dom';
import { loggingInAction } from '../../../actions/actions';
import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => bindActionCreators({ loggingInAction }, dispatch);

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
});

class HamburgerStudent extends Component {
  componentWillMount() {
    this.props.loggingInAction();
  }

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
        <Link to={'/student/dashboard'}><Menu.Item><Icon name="dashboard" />Dashboard</Menu.Item></Link>
        <Link to={'/student/challenges'}><Menu.Item><Icon name="chevron up" />Challenges</Menu.Item></Link>
        <Menu.Item><Icon name="gift" />Rewards</Menu.Item>
      </Menu>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerStudent);
