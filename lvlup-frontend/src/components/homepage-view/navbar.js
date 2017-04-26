import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import './homeview.css';
import { loggingInAction } from '../../actions/actions';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => bindActionCreators({ loggingInAction }, dispatch);


class NavBar extends Component {
  render() {
    return (
      <Menu size="massive" className="nav">
        <Menu.Item className="left" header><div className="name">lvl^</div></Menu.Item>
        <Menu.Item className="right">
          <Link to={'dashboard/student'}>
            <Button color="grey" onClick={() => this.props.loggingInAction()}>
              <Icon name="github" /> Log In or Sign Up with Github
            </Button>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default connect(null, mapDispatchToProps)(NavBar);
