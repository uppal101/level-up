import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Icon } from 'semantic-ui-react';

const renderRewards = props => props.rewards.rewards.filter(reward => reward.active === 'Active').map(item => (
  <Table.Row key={`${item.id}rewards-table-student`}>
    <Table.Cell>{item.name}</Table.Cell>
    <Table.Cell>{item.category.category}</Table.Cell>
    <Table.Cell>{item.description}</Table.Cell>
    <Table.Cell textAlign="center">{item.point_cost}</Table.Cell>
    <Table.Cell textAlign="center">
      <Link to={`/student/reward-request/${item.id}`}>
        <Icon color="orange" onClick={() => props.selectReward(item)} name="long arrow right" />
      </Link>
    </Table.Cell>
  </Table.Row>
));

export default renderRewards;
