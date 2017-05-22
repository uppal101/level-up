import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, List, Container } from 'semantic-ui-react';
import renderIf from 'render-if';
import { Redirect } from 'react-router-dom';
import SubmissionApprovalForm from './approval-form';
import { renderStudentSubmission } from './individual-challenge-helpers';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  selectedChallenge: state.selectedChallenge,
});


export class SelectedChallenge extends Component {
  render() {
    if (!this.props.selectedChallenge.id) {
      return (<div>LOADING</div>);
    }
    return (
      <div className="lvl-table">
        <Container>
          <h1 className="header">{`Challenge Submission Review: ${this.props.selectedChallenge.challenge.name}`}</h1>
          <div>
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
                {renderStudentSubmission(this.props.selectedChallenge)}
              </Table.Body>
            </Table>
            <SubmissionApprovalForm />
          </div>
          {renderIf(this.props.selectedChallenge.submission_status === 'Approved' || this.props.selectedChallenge.submission_status === 'Denied')(
            <Redirect to="/admin/dashboard" />,
        )}
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SelectedChallenge);
