import React from 'react';
import { Icon, Table, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const renderChallenges = props => props.challenges.challenges.filter(challenges => challenges.active === 'Active').map(item => (
  <Table.Row key={item.id}>
    <Table.Cell>{item.name}</Table.Cell>
    <Table.Cell>{item.category.category}</Table.Cell>
    <Table.Cell>{item.description}</Table.Cell>
    <Table.Cell textAlign="center" onClick={() => props.selectChallenge(item)}>
      <Link to={`/admin/challenge-edit/${item.id}`}>
        <Icon color="orange" name="pencil" />
      </Link>
    </Table.Cell>
    <Table.Cell textAlign="center"><Icon
      id="hover-icon"
      name="trash"
      onClick={() => props.makeChallengeInactive(item).then(() => {
        props.resetChallengeList();
        props.campusChallenges(props.adminInfo.campus_id);
      })}
    /></Table.Cell>
    <Table.Cell textAlign="center">{item.point_value}</Table.Cell>
  </Table.Row>
));

export default renderChallenges;
