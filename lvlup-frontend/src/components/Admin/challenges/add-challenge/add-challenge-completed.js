import React from 'react';
import { Label, Table, Button, Grid, Container, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const getLocation = (campusId, campuses) => {
  const matched = campuses.filter(campus => campus.id === Number(campusId));
  return matched[0].location;
};

const AddChallengeCompleted = props => (
  <Container className="lvl-table">
    <Table celled color="orange">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center">Challenge Successfully Added!</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Challenge</Label>
            {props.addedChallenge.data.name}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Point Value</Label>
            {props.addedChallenge.data.point_value}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Requirements</Label>
            {props.addedChallenge.data.requirements_1 ? <List bulleted>
              <List.Item>{props.addedChallenge.data.requirements_1}</List.Item>
              {props.addedChallenge.data.requirements_2 ? <List.Item>{props.addedChallenge.data.requirements_2}</List.Item> : null}
              {props.addedChallenge.data.requirements_3 ? <List.Item>{props.addedChallenge.data.requirements_3}</List.Item> : null}
              {props.addedChallenge.data.requirements_4 ? <List.Item>{props.addedChallenge.data.requirements_4}</List.Item> : null}
              {props.addedChallenge.data.requirements_5 ? <List.Item>{props.addedChallenge.data.requirements_5}</List.Item> : null}
            </List> : 'No requirements!'}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Campus</Label>
            {getLocation(props.addedChallenge.data.campus_id, props.campuses)}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Category</Label>
            {props.addedChallenge.data.category_id}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Description</Label>
            {props.addedChallenge.data.description}
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

export default AddChallengeCompleted;
