import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Segment } from 'semantic-ui-react';
import './admin-config-styles.css';

const AdminConfiguration = () => (
  <Container>
    <Segment className="cohortOptions" textAlign="center">
      <h2>Cohort Options</h2>
      <Link to={'/admin/configuration/addcohort'}><Button color="orange" inverted> Click here to add a Cohort</Button></Link><br /><br />
      <Link to={'/admin/configuration/addadmincohort'}><Button color="orange" inverted> Click here to add a Cohort to your Profile</Button></Link>
    </Segment>
  </Container>
);

export default AdminConfiguration;
