import React, { Component } from 'react';
import { Table, Button, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  submission: state.submittedChallenge,
  loginInfo: state.loginInfo,
  selectedChallenge: state.selectedChallenge,
});

class SubmissionCompleted extends Component {
  render() {
    return (
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
                {this.props.selectedChallenge.name}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Message</Label>
                {this.props.submission.submission_message}
              </Table.Cell>
            </Table.Row>
            {this.props.submission.submission_attachment_1 ?
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Submission Attachment 1</Label>
                  {this.props.submission.submission_attachment_1}
                </Table.Cell>
              </Table.Row> : null}
            {this.props.submission.submission_attachment_2 ?
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Submission Attachment 2</Label>
                  {this.props.submission.submission_attachment_2}
                </Table.Cell>
              </Table.Row> : null}
            {this.props.submission.submission_attachment_3 ?
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Submission Attachment 3</Label>
                  {this.props.submission.submission_attachment_3}
                </Table.Cell>
              </Table.Row> : null}
            {this.props.submission.submission_image_link_1 ?
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Submission Image 1</Label>
                  {this.props.submission.submission_image_link_1}
                </Table.Cell>
              </Table.Row> : null}
            {this.props.submission.submission_image_link_2 ?
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Submission Image 2</Label>
                  {this.props.submission.submission_image_link_2}
                </Table.Cell>
              </Table.Row> : null}
            {this.props.submission.submission_image_link_3 ?
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Submission Image 3</Label>
                  {this.props.submission.submission_image_link_3}
                </Table.Cell>
              </Table.Row> : null}
          </Table.Body>
        </Table>
        <Link to={'/student/challenges'}>
          <Button basic color="orange">Back to Challenges</Button>
        </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SubmissionCompleted);
