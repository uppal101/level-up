import React from 'react';
import renderRewards from '../../helpers/render-rewards';
import { Table, Button, Loader, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../../dashboard/dashboard-styles.css';
import './rewards-styles.css';


const RewardsTable = (props) => {
  if (props.rewards.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <div className="lvl-table">
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" colSpan="6" className="thead-sortable">Rewards
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
            <Table.HeaderCell className="thead-secondary">Title </Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary">Category </Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary">Description</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary" textAlign="center">Edit</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary" textAlign="center">Remove</Table.HeaderCell>
            <Table.HeaderCell className="thead-secondary" textAlign="center">Points </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {renderRewards(props)}
        </Table.Body>
      </Table>
      <Link to="/admin/reward-add"><Button basic color="orange" content="Add Reward" /></Link>
    </div>
  );
};


export default RewardsTable;
