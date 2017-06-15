import React from 'react';
import { Table } from 'semantic-ui-react';
import formatDate from '../../../helpers/format-date';

const renderSubmissions = props => (
  props.submissions.submissions.filter(submission => submission.submission_status !== 'Approved').map((item) => {
    if (item.submission_status === 'Denied') {
      return (
        <Table.Row negative key={`${item.id}student-dashboard1`}>
          <Table.Cell>{item.challenge.name}</Table.Cell>
          <Table.Cell>{item.category.category}</Table.Cell>
          <Table.Cell>{item.challenge.point_value}</Table.Cell>
          <Table.Cell>{formatDate(item.created_at)}</Table.Cell>
        </Table.Row>
      );
    }
    return (
      <Table.Row key={`${item.id}student-dashboard2`}>
        <Table.Cell>{item.challenge.name}</Table.Cell>
        <Table.Cell>{item.category.category}</Table.Cell>
        <Table.Cell>{item.challenge.point_value}</Table.Cell>
        <Table.Cell>{formatDate(item.created_at)}</Table.Cell>
      </Table.Row>
    );
  })
);

export default renderSubmissions;
