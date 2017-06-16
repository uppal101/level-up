import React from 'react';
import { Table, Loader, Icon } from 'semantic-ui-react';
import renderChallenges from '../helpers/render-challenges';

const StudentChallengesTable = (props) => {
  if (props.challenges.challenges.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <div className="lvl-table">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" colSpan="6">Challenges Available</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Title <br /><Icon name="sort alphabet ascending" onClick={() => props.sortChallengeName()} /> <Icon name="sort alphabet descending" onClick={() => props.sortChallengeNameReverse()} /></Table.HeaderCell>
            <Table.HeaderCell>Category <br /> <Icon name="sort alphabet ascending" onClick={() => props.sortChallengeCatagory()} /> <Icon name="sort alphabet descending" onClick={() => props.sortChallengeCatagoryReverse()} /></Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Requirement</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Points <br /><Icon name="sort numeric ascending" onClick={() => props.sortChallengePoints()} /><Icon name="sort numeric descending" onClick={() => props.sortChallengePointsReverse()} /></Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Submit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {renderChallenges(props)}
        </Table.Body>
      </Table>
    </div>
  );
};

export default StudentChallengesTable;
