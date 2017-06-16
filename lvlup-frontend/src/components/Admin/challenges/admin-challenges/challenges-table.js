import React from 'react';
import { Table, Container, Button, Loader, Icon } from 'semantic-ui-react';
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
              <Table.HeaderCell textAlign="center" colSpan="7">Challenges</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Title <br /><Icon name="sort alphabet ascending" onClick={() => props.sortChallengeName()} /> <Icon name="sort alphabet descending" onClick={() => props.sortChallengeNameReverse()} /></Table.HeaderCell>
              <Table.HeaderCell>Category <br /> <Icon name="sort alphabet ascending" onClick={() => props.sortChallengeCatagory()} /> <Icon name="sort alphabet descending" onClick={() => props.sortChallengeCatagoryReverse()} /></Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Requirements</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Edit</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Remove</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Points <br /><Icon name="sort numeric ascending" onClick={() => props.sortChallengePoints()} /><Icon name="sort numeric descending" onClick={() => props.sortChallengePointsReverse()} /></Table.HeaderCell>
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
