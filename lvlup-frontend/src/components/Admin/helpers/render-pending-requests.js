import React from 'react';
import { Icon, Table, Popup } from 'semantic-ui-react';
import formatDate from '../../../helpers/format-date';

const renderPendingRequests = props => props.pendingRequests.requestsAdmin.filter(reward => reward.status === 'Pending approval').map(item => (
  <Table.Row key={`${item.id}requests-table-admin`}>
    <Table.Cell>{item.student.name}</Table.Cell>
    <Table.Cell>{item.reward.name}</Table.Cell>
    <Table.Cell textAlign="center">{formatDate(item.created_at)}</Table.Cell>
    <Table.Cell textAlign="center">
      {
          item.notes ?
            <Popup
              trigger={<Icon circular id="hover-icon" color="orange" name="comments" />}
              wide
            > {item.notes}
            </Popup> : 'No Notes'
        }
    </Table.Cell>
    <Table.Cell textAlign="center">
      <div
        onClick={() => props.denySelectedReward(item, { status: 'Denied' }).then(() => {
          props.resetPendingRequests();
          props.adminInfo.cohorts.map(item => props.requestsAction(item.id));
        })}
      >
        <Icon id="hover-icon" name="close" />
      </div>
      <div
        onClick={() => props.approveSelectedReward(item, { status: 'Approved' }).then(() => {
          props.resetPendingRequests();
          props.adminInfo.cohorts.map(item => props.requestsAction(item.id));
        })}
      >
        <Icon id="hover-icon" color="orange" name="checkmark" />
      </div>
    </Table.Cell>
  </Table.Row>
    ),
  );

export default renderPendingRequests;
