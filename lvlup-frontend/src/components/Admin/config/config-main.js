import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Segment } from 'semantic-ui-react';
import { resetAddCohort } from '../../../actions/admin-config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ resetAddCohort }, dispatch);
}

class AdminConfiguration extends Component {
  componentWillMount() {
    this.props.resetAddCohort();
  }
  render() {
    return (
      <Container>
        <Segment>
          <h2>Cohort Options</h2>
          <Link to={'/admin/configuration/addcohort'}><Button color="orange" inverted> Click here to add a Cohort</Button></Link>
          <Link to={'/admin/configuration/addadmincohort'}><Button color="orange" inverted> Click here to add a Cohort to your Profile</Button></Link>
        </Segment>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(AdminConfiguration);
