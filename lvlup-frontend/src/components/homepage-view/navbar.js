import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import './homeview.css';
import { loggingInAction } from '../../actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

const mapDispatchToProps = dispatch => bindActionCreators({ loggingInAction }, dispatch);

class NavBar extends Component {
  render() {
    return (
      <Menu size="massive" className="nav">
        <Menu.Item className="left" header><div className="name">lvl^</div></Menu.Item>
        <Menu.Item className="right">
          {/* <a href={'http://localhost:3000/api/auth/github'}> */}
          {/* <Button color="grey"> */}
            <Button color="grey" onClick={this.props.loggingInAction()}>
            <Icon name="github" /> Log In or Sign Up with Github
          </Button>
        {/* </a> */}
        </Menu.Item>
      </Menu>
    );
  }
}

export default connect(null, mapDispatchToProps)(NavBar);
