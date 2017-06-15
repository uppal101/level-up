import React from 'react';
import { Icon, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import formatDate from '../../../helpers/format-date';

const renderPendingSubmissions = props => props.pendingSubmissions.submissionsAdmin.filter(challenge => challenge.submission_status === 'Pending approval').map(item => (
  <Table.Row key={`${item.id}challenges-table-admin`}>
    <Table.Cell>{item.student.name}</Table.Cell>
    <Table.Cell>{item.challenge.name}</Table.Cell>
    <Table.Cell textAlign="center">{formatDate(item.created_at)}</Table.Cell>
    <Table.Cell textAlign="center" onClick={() => props.selectChallenge(item)}><Link to={`/admin/pending-submission/${item.id}`}><Icon color="orange" name="eye" /></Link></Table.Cell>
  </Table.Row>
    ),
  );

export default renderPendingSubmissions;
