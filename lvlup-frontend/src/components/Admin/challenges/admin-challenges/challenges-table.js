import React from 'react';
import { Table, Container, Button, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import './challenges-style.css';
import renderChallenges from '../../helpers/render-challenges';


const ChallengesTable = (props) => {
  if (props.challenges.length === 0) {
    return (<Loader active inline="centered"> Loading </Loader>);
  }
  return (
    <div className="lvl-table">
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="6">Challenges</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Requirements</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Edit</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Remove</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Points</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {renderChallenges(props)}
          </Table.Body>

        </Table>
        <Link to="/admin/challenge-add">
          <Button basic color="orange" content="Add Challenge" />
        </Link>
      </Container>
    </div>
  );
};

export default ChallengesTable;
