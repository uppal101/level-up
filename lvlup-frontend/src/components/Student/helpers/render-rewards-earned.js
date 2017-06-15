import React from 'react';
import { Table } from 'semantic-ui-react';
import formatDate from '../../../helpers/format-date';

const renderRewardsEarned = props => (
  props.requests.requests.filter(submission => submission.submission_status === 'Approved').map(item => (
    <Table.Row key={`${item.id}student-dashboard3`}>
      <Table.Cell>{item.challenge.name}</Table.Cell>
      <Table.Cell>{item.category.category}</Table.Cell>
      <Table.Cell>{item.challenge.point_value}</Table.Cell>
      <Table.Cell>{formatDate(item.created_at)}</Table.Cell>
    </Table.Row>
  ))
);

export default renderRewardsEarned;
