import React from 'react';
import { Label, Table, Button, Grid, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './admin-edit-challenge-styles.css';

const mapStateToProps = state => ({
  editedChallenge: state.editedChallenge,
});

const EditChallengeCompleted = props => (
  <Container>
    <Table celled color="orange">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Challenge Edit Successful!</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Challenge</Label>
            {props.editedChallenge.data.name}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Point Value</Label>
            {props.editedChallenge.data.point_value}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Description</Label>
            {props.editedChallenge.data.description}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Grid centered>
      <Link to={'/admin/challenges'}>
        <Button basic color="orange" id="completed-btn">Back to Challenges</Button>
      </Link>
    </Grid>
  </Container>
);

export default connect(mapStateToProps)(EditChallengeCompleted);
