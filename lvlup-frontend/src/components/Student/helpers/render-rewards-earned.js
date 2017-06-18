import React from 'react';
import { Table } from 'semantic-ui-react';
import formatDate from '../../../helpers/format-date';

const renderRewardsEarned = props => (
  props.filter(request => request.status === 'Approved').map(item => (
    <Table.Row key={`${item.id}student-dashboard3`}>
      <Table.Cell>{item.reward.name}</Table.Cell>
      <Table.Cell>{item.category.category}</Table.Cell>
      <Table.Cell>{item.reward.point_cost}</Table.Cell>
      <Table.Cell>{formatDate(item.created_at)}</Table.Cell>
    </Table.Row>
  ))
);

export default renderRewardsEarned;
