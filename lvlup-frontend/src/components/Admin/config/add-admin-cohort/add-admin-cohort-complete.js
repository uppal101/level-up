import React, { Component } from 'react';
import { Message, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetAdmin } from '../../../../actions/admin-config';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ resetAdmin }, dispatch);
}

function mapStateToProps(state, ownProps) {
  return {
    admin: state.loggedIn,
  };
}

class AdminCohortSuccessMessage extends Component {
  componentWillMount() {
    this.props.resetAdmin(this.props.admin.id);
  }
  render() {
    return (
      <Message className="successAdminCohort">
        <Message.Header>
          Success!
        </Message.Header>
        <p>
          You have successfully added more cohorts to your profile!
        </p>
        <Link to={'/admin/configuration'}><Button basic color="orange">OK</Button></Link>
      </Message>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminCohortSuccessMessage);
