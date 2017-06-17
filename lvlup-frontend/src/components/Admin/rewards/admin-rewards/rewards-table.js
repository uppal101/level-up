import React from 'react';
import renderRewards from '../../helpers/render-rewards';
import { Table, Container, Button, Loader, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../../dashboard/dashboard-styles.css';
import './rewards-styles.css';


const RewardsTable = (props) => {
  if (props.rewards.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <div className="lvl-table">
      <Container>
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="6">Rewards</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Title <Icon name="sort alphabet ascending" onClick={() => props.sortRewardName()} /> <Icon name="sort alphabet descending" onClick={() => props.sortRewardNameReverse()} /></Table.HeaderCell>
              <Table.HeaderCell>Category <Icon name="sort alphabet ascending" onClick={() => props.sortRewardCatagory()} /> <Icon name="sort alphabet descending" onClick={() => props.sortRewardCatagoryReverse()} /></Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Edit</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Remove</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Points <Icon name="sort numeric ascending" onClick={() => props.sortRewardPoints()} /><Icon name="sort numeric descending" onClick={() => props.sortRewardPointsReverse()} /></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {renderRewards(props)}
          </Table.Body>
        </Table>
        <Link to="/admin/reward-add"><Button basic color="orange" content="Add Reward" /></Link>
      </Container>
    </div>
  );
};


export default RewardsTable;
