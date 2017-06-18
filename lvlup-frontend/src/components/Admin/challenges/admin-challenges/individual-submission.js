import React from 'react';
import { Table, List, Container, Loader } from 'semantic-ui-react';
import renderIf from 'render-if';
import { Redirect } from 'react-router-dom';
import ApprovalContainer from './approval-container';
import renderSubmission from '../../helpers/render-submission';

const IndividualSubmission = (props) => {
  if (!props.selectedChallenge.id) {
    return (<Loader active inline="centered"> Loading </Loader>);
  }
  return (
    <div className="lvl-table">
      <Container>
        <h1 className="header">{`Challenge Submission Review: ${props.selectedChallenge.challenge.name}`}</h1>
        <div>
          <h3>{`${props.selectedChallenge.student.name}, ${props.adminLoginInfo.cohorts.filter(cohort => cohort.id === props.selectedChallenge.cohort_id).map(cohort => cohort.name)}` }</h3>
          <Table celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell className="table-head" id="challenge-info" textAlign="center" colSpan="5">
                  Challenge Information
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell className="thead-secondary"textAlign="center">Title</Table.HeaderCell>
                <Table.HeaderCell className="thead-secondary"textAlign="center">Category</Table.HeaderCell>
                <Table.HeaderCell className="thead-secondary" textAlign="center">Description</Table.HeaderCell>
                <Table.HeaderCell className="thead-secondary"textAlign="center">Requirement</Table.HeaderCell>
                <Table.HeaderCell className="thead-secondary"textAlign="center">Points</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row key={`${props.selectedChallenge.id}individual-challenge2`}>
                <Table.Cell textAlign="center">{props.selectedChallenge.challenge.name}</Table.Cell>
                <Table.Cell textAlign="center">{props.selectedChallenge.category.category}</Table.Cell>
                <Table.Cell textAlign="center">{props.selectedChallenge.challenge.description}</Table.Cell>
                <Table.Cell textAlign="center">
                  {props.selectedChallenge.challenge.requirements_1 ? <List bulleted>
                    <List.Item>{props.selectedChallenge.challenge.requirements_1}</List.Item>
                    {props.selectedChallenge.challenge.requirements_2 ? <List.Item>{props.selectedChallenge.challenge.requirements_2}</List.Item> : null}
                    {props.selectedChallenge.challenge.requirements_3 ? <List.Item>{props.selectedChallenge.challenge.requirements_3}</List.Item> : null}
                    {props.selectedChallenge.challenge.requirements_4 ? <List.Item>{props.selectedChallenge.challenge.requirements_4}</List.Item> : null}
                    {props.selectedChallenge.challenge.requirements_5 ? <List.Item>{props.selectedChallenge.challenge.requirements_5}</List.Item> : null}
                  </List> : 'No requirements!'}
                </Table.Cell>
                <Table.Cell textAlign="center">{props.selectedChallenge.challenge.point_value}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell className="table-head" id="submission-info" textAlign="center" colSpan="5">Submission Information</Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell className="thead-secondary" textAlign="center">Submission Message</Table.HeaderCell>
                <Table.HeaderCell className="thead-secondary" textAlign="center">Attachment 1</Table.HeaderCell>
                <Table.HeaderCell className="thead-secondary" textAlign="center">Attachment 2</Table.HeaderCell>
                <Table.HeaderCell className="thead-secondary" textAlign="center">Attachment 3</Table.HeaderCell>
                <Table.HeaderCell className="thead-secondary" textAlign="center">Images</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {renderSubmission(props.selectedChallenge)}
            </Table.Body>
          </Table>
          <ApprovalContainer />
        </div>
        {renderIf(props.selectedChallenge.submission_status === 'Approved' || props.selectedChallenge.submission_status === 'Denied')(
          <Redirect to="/admin/dashboard" />,
        )}
      </Container>
    </div>
  );
};

export default IndividualSubmission;
