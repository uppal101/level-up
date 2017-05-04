import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submissionForApproval } from '../../../actions/challenge-review'
import { Table } from 'semantic-ui-react';
import SubmissionApprovalForm from './approval-form';
import {Lightbox} from 'react-lightbox-component'

const mapDispatchToProps = dispatch => bindActionCreators({submissionForApproval}, dispatch)

const mapStateToProps = state => ({
    loggedIn: state.loggedIn,
    pendingSubmissions: state.adminPendingSubmissions,
    //ADD IN SELECTED CHALLENGE SUBMISSION
})

class SelectedChallenge extends Component {
  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
  }

  componentWillMount() {
    this.props.submissionForApproval(ENTER ID HERE)
  }

  renderChallengeInfoTable(list) {
    return list.map(item => (
      <Table.Row key={item.id}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.category.category}</Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
        <Table.Cell>
          {item.requirements_1 ? <List bulleted>
            <List.Item>{item.requirements_1}</List.Item>
            {item.requirements_2 ? <List.Item>{item.requirements_2}</List.Item> : null}
            {item.requirements_3 ? <List.Item>{item.requirements_3}</List.Item> : null}
            {item.requirements_4 ? <List.Item>{item.requirements_4}</List.Item> : null}
            {item.requirements_5 ? <List.Item>{item.requirements_5}</List.Item> : null}
          </List> : 'No requirements!'}
        </Table.Cell>
        <Table.Cell>{item.point_value}</Table.Cell>
        <Table.Cell onClick={() => this.props.selectChallenge(item)}><Link to={`/student/challenge-submission/${item.id}`}>lvl^</Link></Table.Cell>
      </Table.Row>
      ));
  }

  renderStudentSubmission(item) {
    let imageArr = []
    item.submission_image_link_1 ? imageArr.push({src: item.submission_image_link_1, title: 'challenge submission image 1'}): imageArr
    item.submission_image_link_2 ? imageArr.push({src: item.submission_image_link_2, title: 'challenge submission image 2'}): imageArr
    item.submission_image_link_3 ? imageArr.push({src: item.submission_image_link_3, title: 'challenge submission image 3'}): imageArr

    return (
      <Table.Row key={item.id}>
        <Table.Cell>{item.submission_message}</Table.Cell>
        <Table.Cell>{item.submission_attachment_1 ? item.submission_attachment_1 : 'No Attachment Available'}</Table.Cell>
        <Table.Cell>{item.submission_attachment_2 ? item.submission_attachment_2 : 'No Attachment Available'}</Table.Cell>
        <Table.Cell>{item.submission_attachment_3 ? item.submission_attachment_3 : 'No Attachment Available'}</Table.Cell>
        <Table.Cell>{imageArr.length >= 1 ? <Lightbox images={imageArr} /> : 'No phots submitted'}</Table.Cell>
      </Table.Row>
    )
  }

  render() {
    return (
      <div>
        <h1 className="header">Challenge Submission Review: CHALLENGE HERE</h1>
        <h5>STUDENT NAME HERE</h5>
        <h5>COHORT HERE</h5>
        <h3>Challenge Requested Information</h3>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Requirement</Table.HeaderCell>
              <Table.HeaderCell>Points</Table.HeaderCell>
              <Table.HeaderCell>Challenge Submission</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.renderChallengeInfoTable(ENTER CHALLENGE STATE HERE)}
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
            {this.renderStudentSubmission(SUBMISSION HERE)}
          </Table.Body>
        </Table>
        <SubmissionApprovalForm />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedChallenge)
