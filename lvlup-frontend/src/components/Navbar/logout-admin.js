import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loggingOutAdmin } from '../../actions/navbar';

const mapDispatchToProps = dispatch => bindActionCreators({ loggingOutAdmin }, dispatch);

const LogOutAdmin = props => (
  <Link to={'/'}>
    <Button inverted color="orange" size="small" onClick={() => props.loggingOutAdmin()}>
      <Icon name="remove circle" /> Log Out
        </Button>
  </Link>
);

export default connect(null, mapDispatchToProps)(LogOutAdmin);
