import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loggingOutStudent } from '../../actions/navbar';
import { Link } from 'react-router-dom';

const mapDispatchToProps = dispatch => bindActionCreators({ loggingOutStudent }, dispatch);

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
});

class LogOutGithub extends Component {
  render() {
    return (
      <Link to={'/'}>
        <Button color="orange" onClick={() => this.props.loggingOutStudent()}>
          <Icon name="github" /> LOG OUT!
        </Button>
      </Link>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogOutGithub);
