import React from 'react';
import { Message, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AdminCohortSuccessMessage = props => (
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

export default AdminCohortSuccessMessage;
