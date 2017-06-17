import React from 'react';
import { Table, Container, Button, Loader, Dropdown } from 'semantic-ui-react';
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
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="6" className="table-head">Challenges</Table.HeaderCell>
              <Table.HeaderCell textAlign="center" colSpan="1" className="sort-dropdown">
                <Dropdown text="Sort">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      text="by Title Ascending"
                      onClick={() => props.sortChallengeName()}
                    />
                    <Dropdown.Item
                      text="by Title Descending"
                      onClick={() => props.sortChallengeNameReverse()}
                    />
                    <Dropdown.Item
                      text="by Category Ascending"
                      onClick={() => props.sortChallengeCategory()}
                    />
                    <Dropdown.Item
                      text="by Category Descending"
                      onClick={() => props.sortChallengeCategoryReverse()}
                    />
                    <Dropdown.Item
                      text="by Points Ascending"
                      onClick={() => props.sortChallengePoints()}
                    />
                    <Dropdown.Item
                      text="by Points Descending"
                      onClick={() => props.sortChallengePointsReverse()}
                    />
                  </Dropdown.Menu>
                </Dropdown>
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Title </Table.HeaderCell>
              <Table.HeaderCell>Category </Table.HeaderCell>
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
