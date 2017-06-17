import React from 'react';
import { Table, Container, Loader, Icon } from 'semantic-ui-react';
import renderRewards from '../helpers/render-rewards';

const StudentRewardsTable = (props) => {
  if (props.rewards.rewards.length === 0) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <div className="lvl-table">
      <Container>
        <Table celled selectable color="orange">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="5">Rewards</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Title <br /><Icon name="sort alphabet ascending" onClick={() => props.sortRewardName()} /> <Icon name="sort alphabet descending" onClick={() => props.sortRewardNameReverse()} /></Table.HeaderCell>
              <Table.HeaderCell>Category <Icon name="sort alphabet ascending" onClick={() => props.sortRewardCategory()} /> <Icon name="sort alphabet descending" onClick={() => props.sortRewardCategoryReverse()} /></Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Points <Icon name="sort numeric ascending" onClick={() => props.sortRewardPoints()} /><Icon name="sort numeric descending" onClick={() => props.sortRewardPointsReverse()} /></Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Request</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {renderRewards(props)}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
};

export default StudentRewardsTable;
