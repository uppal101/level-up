import React from 'react';
import { Table, Button, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const AddCohortComplete = props => (
  <div className="lvl-table">
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center">Add Cohorot Successful!</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Name</Label>
            {props.addCohort.name}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Type</Label>
            {props.addCohort.type}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Q1 Start Date</Label>
            {props.addCohort.q1_start_date}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Q2 Start Date</Label>
            {props.addCohort.q2_start_date}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Q3 Start Date</Label>
            {props.addCohort.q3_start_date}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Q4 Start Date</Label>
            {props.addCohort.q4_start_date}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Graduation Data</Label>
            {props.addCohort.graduation_date}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Link to={'/admin/configuration'}>
      <Button basic color="orange">Back to Confirguration</Button>
    </Link>
  </div>
);


export default AddCohortComplete;
