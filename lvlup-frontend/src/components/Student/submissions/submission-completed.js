import React from 'react';
import { Table, Button, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SubmissionCompleted = props => (
  <div className="lvl-table">
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center">Challenge Submission Successful!</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Name</Label>
            {props.selectedChallenge.name}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>Message</Label>
            {props.submission.submission_message}
          </Table.Cell>
        </Table.Row>
        {props.submission.submission_attachment_1 ?
          <Table.Row>
            <Table.Cell>
              <Label ribbon>Submission Attachment 1</Label>
              {props.submission.submission_attachment_1}
            </Table.Cell>
          </Table.Row> : null}
        {props.submission.submission_attachment_2 ?
          <Table.Row>
            <Table.Cell>
              <Label ribbon>Submission Attachment 2</Label>
              {props.submission.submission_attachment_2}
            </Table.Cell>
          </Table.Row> : null}
        {props.submission.submission_attachment_3 ?
          <Table.Row>
            <Table.Cell>
              <Label ribbon>Submission Attachment 3</Label>
              {props.submission.submission_attachment_3}
            </Table.Cell>
          </Table.Row> : null}
        {props.submission.submission_image_link_1 ?
          <Table.Row>
            <Table.Cell>
              <Label ribbon>Submission Image 1</Label>
              {props.submission.submission_image_link_1}
            </Table.Cell>
          </Table.Row> : null}
        {props.submission.submission_image_link_2 ?
          <Table.Row>
            <Table.Cell>
              <Label ribbon>Submission Image 2</Label>
              {props.submission.submission_image_link_2}
            </Table.Cell>
          </Table.Row> : null}
        {props.submission.submission_image_link_3 ?
          <Table.Row>
            <Table.Cell>
              <Label ribbon>Submission Image 3</Label>
              {props.submission.submission_image_link_3}
            </Table.Cell>
          </Table.Row> : null}
      </Table.Body>
    </Table>
    <Link to={'/student/challenges'}>
      <Button basic color="orange">Back to Challenges</Button>
    </Link>
  </div>
);

export default SubmissionCompleted;
