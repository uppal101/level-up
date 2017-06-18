import React from 'react';
import { Table, Loader, Dropdown } from 'semantic-ui-react';
import renderRewards from '../helpers/render-rewards';

const StudentRewardsTable = (props) => {
  if (props.rewards.rewards.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <div className="lvl-table">
      <Table celled selectable color="orange">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" colSpan="5" className="thead-sortable">Rewards
                <Dropdown text="Sort" className="sort">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      text="by Title Ascending"
                      onClick={() => props.sortRewardName()}
                    />
                    <Dropdown.Item
                      text="by Title Descending"
                      onClick={() => props.sortRewardNameReverse()}
                    />
                    <Dropdown.Item
                      text="by Category Ascending"
                      onClick={() => props.sortRewardCategory()}
                    />
                    <Dropdown.Item
                      text="by Category Descending"
                      onClick={() => props.sortRewardCategoryReverse()}
                    />
                    <Dropdown.Item
                      text="by Points Ascending"
                      onClick={() => props.sortRewardPoints()}
                    />
                    <Dropdown.Item
                      text="by Points Descending"
                      onClick={() => props.sortRewardPointsReverse()}
                    />
                  </Dropdown.Menu>
                </Dropdown>
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell className="thead-secondary">Title</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary">Category</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary">Description</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary" textAlign="center">Points</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary" textAlign="center">Request</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {renderRewards(props)}
        </Table.Body>
      </Table>
    </div>
  );
};

export default StudentRewardsTable;
