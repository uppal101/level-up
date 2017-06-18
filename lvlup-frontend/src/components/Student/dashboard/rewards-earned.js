import React from 'react';
import { Table, Loader, Dropdown } from 'semantic-ui-react';
import renderRewardsEarned from '../helpers/render-rewards-earned';

const RewardsEarned = (props) => {
  if (props.requests.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell className="thead-sortable" textAlign="center" colSpan="4">Rewards Earned
            <Dropdown text="Sort" className="sort">
              <Dropdown.Menu>
                <Dropdown.Item
                  text="by Points Least to Most"
                  onClick={() => props.sortRewardsAsc()}
                />
                <Dropdown.Item
                  text="by Points Most to Lease"
                  onClick={() => props.sortRewardsDesc()}
                />
                <Dropdown.Item
                  text="by Date Chronological"
                  onClick={() => props.sortRewardsChrono()}
                />
                <Dropdown.Item
                  text="by Date Reverse Chronological"
                  onClick={() => props.sortRewardsRevChrono()}
                />
              </Dropdown.Menu>
            </Dropdown>
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell className="thead-secondary">Title</Table.HeaderCell>
          <Table.HeaderCell className="thead-secondary">Category</Table.HeaderCell>
          <Table.HeaderCell className="thead-secondary">Points</Table.HeaderCell>
          <Table.HeaderCell className="thead-secondary">Date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {renderRewardsEarned(props.requests)}
      </Table.Body>
    </Table>
  );
};

export default RewardsEarned;
