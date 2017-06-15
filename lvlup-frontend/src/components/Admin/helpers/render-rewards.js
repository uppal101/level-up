import React from 'react';
import { Icon, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const renderRewards = props => props.rewards.rewards.filter(reward => reward.active === 'Active').map(item => (
  <Table.Row key={`${item.id}rewards-table-admin`}>
    <Table.Cell>{item.name}</Table.Cell>
    <Table.Cell>{item.category.category}</Table.Cell>
    <Table.Cell>{item.description}</Table.Cell>
    <Table.Cell textAlign="center">
      <Link to={`/admin/reward-edit/${item.id}`}>
        <Icon color="orange" onClick={() => props.selectReward(item)} name="pencil" /></Link>
    </Table.Cell>
    <Table.Cell textAlign="center"><Icon
      onClick={() => props.makeRewardInactive(item).then(() => {
        props.resetRewardsList();
        props.campusRewards(props.adminInfo.campus_id);
      })} id="hover-icon" name="trash"
    /></Table.Cell>
    <Table.Cell textAlign="center">{item.point_cost}</Table.Cell>
  </Table.Row>
));
export default renderRewards;
