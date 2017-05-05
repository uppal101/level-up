import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { submissionForApproval } from '../../../actions/challenge-review'
import { Table, List, Image, Modal, Icon } from 'semantic-ui-react';
import SubmissionApprovalForm from './approval-form';
import renderIf from 'render-if';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  selectedChallenge: state.selectedChallenge,
});

const imageModal = image => (
  <Modal trigger={<Icon name="image" />}>
    <Modal.Header>Challenge Submission Photo(s)</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src={image} />
    </Modal.Content>
  </Modal>
);

export class SelectedChallenge extends Component {
  constructor(props) {
    super(props);
    this.renderStudentSubmission = this.renderStudentSubmission.bind(this);
  }

  renderStudentSubmission(item) {
    return (
      <Table.Row key={`${item.id}individual-challenge1`}>
        <Table.Cell>{item.submission_message}</Table.Cell>
        <Table.Cell>{item.submission_attachment_1 ? item.submission_attachment_1 : 'No Attachment Available'}</Table.Cell>
        <Table.Cell>{item.submission_attachment_2 ? item.submission_attachment_2 : 'No Attachment Available'}</Table.Cell>
        <Table.Cell>{item.submission_attachment_3 ? item.submission_attachment_3 : 'No Attachment Available'}</Table.Cell>
        <Table.Cell>
          {item.submission_image_link_1 ? imageModal(item.submission_image_link_1) : 'No phots submitted'}
          {item.submission_image_link_2 ? imageModal(item.submission_image_link_2) : null}
          {item.submission_image_link_3 ? imageModal(item.submission_image_link_3) : null}
        </Table.Cell>
      </Table.Row>
    );
  }

  render() {
    if (!this.props.selectedChallenge.id) {
      return (<div>LOADING</div>);
    }
    return (
      <div>
        <h1 className="header">{`Challenge Submission Review: ${this.props.selectedChallenge.challenge.name}`}</h1>
        <div className="challengeSubmission">
          <h3>{`${this.props.selectedChallenge.student.name}, ${this.props.loggedIn.cohorts.filter(cohort => cohort.id === this.props.selectedChallenge.cohort_id).map(cohort => cohort.name)}` }</h3>
          <h3>Challenge Requested Information</h3>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Requirement</Table.HeaderCell>
                <Table.HeaderCell>Points</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row key={`${this.props.selectedChallenge.id}individual-challenge2`}>
                <Table.Cell>{this.props.selectedChallenge.challenge.name}</Table.Cell>
                <Table.Cell>{this.props.selectedChallenge.category.category}</Table.Cell>
                <Table.Cell>{this.props.selectedChallenge.challenge.description}</Table.Cell>
                <Table.Cell>
                  {this.props.selectedChallenge.challenge.requirements_1 ? <List bulleted>
                    <List.Item>{this.props.selectedChallenge.challenge.requirements_1}</List.Item>
                    {this.props.selectedChallenge.challenge.requirements_2 ? <List.Item>{this.props.selectedChallenge.challenge.requirements_2}</List.Item> : null}
                    {this.props.selectedChallenge.challenge.requirements_3 ? <List.Item>{this.props.selectedChallenge.challenge.requirements_3}</List.Item> : null}
                    {this.props.selectedChallenge.challenge.requirements_4 ? <List.Item>{this.props.selectedChallenge.challenge.requirements_4}</List.Item> : null}
                    {this.props.selectedChallenge.challenge.requirements_5 ? <List.Item>{this.props.selectedChallenge.challenge.requirements_5}</List.Item> : null}
                  </List> : 'No requirements!'}
                </Table.Cell>
                <Table.Cell>{this.props.selectedChallenge.challenge.point_value}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <h3>Student Request Information</h3>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Submission Message</Table.HeaderCell>
                <Table.HeaderCell>Attachment 1</Table.HeaderCell>
                <Table.HeaderCell>Attachment 2</Table.HeaderCell>
                <Table.HeaderCell>Attachment 3</Table.HeaderCell>
                <Table.HeaderCell>Images</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.renderStudentSubmission(this.props.selectedChallenge)}
            </Table.Body>
          </Table>
          <SubmissionApprovalForm />
        </div>
        {renderIf(this.props.selectedChallenge.submission_status === 'Approved' || this.props.selectedChallenge.submission_status === 'Denied')(
          <Redirect to="/admin/dashboard" />,
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(SelectedChallenge);
