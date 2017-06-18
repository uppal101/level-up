import React from 'react';
import { Table, Button, Loader, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './challenges-style.css';
import renderChallenges from '../../helpers/render-challenges';


const ChallengesTable = (props) => {
  if (props.challenges.length === 0) {
    return (<Loader active inline="centered"> Loading </Loader>);
  }
  return (
    <div className="lvl-table">
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" className="thead-sortable" colSpan="7">Challenges
                <Dropdown text="Sort" className="sort">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      text="by Challenge Ascending"
                      onClick={() => props.sortChallengeName()}
                    />
                    <Dropdown.Item
                      text="by Challenge Descending"
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
                      text="by Point Value Ascending"
                      onClick={() => props.sortChallengePoints()}
                    />
                    <Dropdown.Item
                      text="by Point Value Descending"
                      onClick={() => props.sortChallengePointsReverse()}
                    />
                  </Dropdown.Menu>
                </Dropdown>
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell className="thead-secondary">Title</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary">Category</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary">Description</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary">Requirements</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary" textAlign="center">Edit</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary" textAlign="center">Remove</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary" textAlign="center">Points</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {renderChallenges(props)}
        </Table.Body>

      </Table>
      <Link to="/admin/challenge-add">
        <Button basic color="orange" content="Add Challenge" />
      </Link>
    </div>
  );
};

export default ChallengesTable;
