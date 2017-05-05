import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { loggingOutAdmin } from '../../actions/navbar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapDispatchToProps = dispatch => bindActionCreators({ loggingOutAdmin }, dispatch);

class LogOutAdmin extends Component {
  render() {
    return (
      <Link to={'/'}>
        <Button inverted color="orange" size="small" onClick={() => this.props.loggingOutAdmin()}>
          <Icon name="remove circle" /> Log Out
        </Button>
      </Link>
    );
  }
}

export default connect(null, mapDispatchToProps)(LogOutAdmin);
