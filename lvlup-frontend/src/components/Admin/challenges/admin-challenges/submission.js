import React from 'react';
import { Table, List, Container, Loader } from 'semantic-ui-react';
import renderIf from 'render-if';
import { Redirect } from 'react-router-dom';
import ApprovalMain from './approval-main';
import renderSubmission from './render-submission';

const SelectedSubmission = (props) => {
  if (!props.selectedChallenge.id) {
    return (<Loader active inline="centered"> Loading </Loader>);
  }
  return (
    <div className="lvl-table">
      <Container>
        <h1 className="header">{`Challenge Submission Review: ${props.selectedChallenge.challenge.name}`}</h1>
        <div>
          <h3>{`${props.selectedChallenge.student.name}, ${props.loggedIn.cohorts.filter(cohort => cohort.id === props.selectedChallenge.cohort_id).map(cohort => cohort.name)}` }</h3>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center" colSpan="5">
                  Challenge Information
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Requirement</Table.HeaderCell>
                <Table.HeaderCell>Points</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row key={`${props.selectedChallenge.id}individual-challenge2`}>
                <Table.Cell>{props.selectedChallenge.challenge.name}</Table.Cell>
                <Table.Cell>{props.selectedChallenge.category.category}</Table.Cell>
                <Table.Cell>{props.selectedChallenge.challenge.description}</Table.Cell>
                <Table.Cell>
                  {props.selectedChallenge.challenge.requirements_1 ? <List bulleted>
                    <List.Item>{props.selectedChallenge.challenge.requirements_1}</List.Item>
                    {props.selectedChallenge.challenge.requirements_2 ? <List.Item>{props.selectedChallenge.challenge.requirements_2}</List.Item> : null}
                    {props.selectedChallenge.challenge.requirements_3 ? <List.Item>{props.selectedChallenge.challenge.requirements_3}</List.Item> : null}
                    {props.selectedChallenge.challenge.requirements_4 ? <List.Item>{props.selectedChallenge.challenge.requirements_4}</List.Item> : null}
                    {props.selectedChallenge.challenge.requirements_5 ? <List.Item>{props.selectedChallenge.challenge.requirements_5}</List.Item> : null}
                  </List> : 'No requirements!'}
                </Table.Cell>
                <Table.Cell>{props.selectedChallenge.challenge.point_value}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center" colSpan="5">Submission Information</Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Submission Message</Table.HeaderCell>
                <Table.HeaderCell>Attachment 1</Table.HeaderCell>
                <Table.HeaderCell>Attachment 2</Table.HeaderCell>
                <Table.HeaderCell>Attachment 3</Table.HeaderCell>
                <Table.HeaderCell>Images</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {renderSubmission(props.selectedChallenge)}
            </Table.Body>
          </Table>
          <ApprovalMain />
        </div>
        {renderIf(props.selectedChallenge.submission_status === 'Approved' || props.selectedChallenge.submission_status === 'Denied')(
          <Redirect to="/admin/dashboard" />,
        )}
      </Container>
    </div>
  );
};

export default SelectedSubmission;
