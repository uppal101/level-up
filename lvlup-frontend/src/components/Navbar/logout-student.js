import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { loggingOutStudent } from '../../actions/navbar';

const mapDispatchToProps = dispatch => bindActionCreators({ loggingOutStudent }, dispatch);

const mapStateToProps = state => ({
  loginInfo: state.loginInfo,
});

const LogOutGithub = () => (
  <Link to={'/'}>
    <Button inverted color="orange" size="small" onClick={() => this.props.loggingOutStudent()}>
      <Icon name="github" /> Log Out
        </Button>
  </Link>
);

export default connect(mapStateToProps, mapDispatchToProps)(LogOutGithub);
