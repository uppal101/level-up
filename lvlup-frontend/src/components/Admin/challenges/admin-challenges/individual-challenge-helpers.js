import React from 'react';
import { Table, Image, Modal, Icon } from 'semantic-ui-react';

export const imageModal = image => (
  <Modal trigger={<Icon name="image" />}>
    <Modal.Header>Challenge Submission Photo(s)</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src={image} />
    </Modal.Content>
  </Modal>
);

export const renderStudentSubmission = function renderStudentSubmission(item) {
  return (
    <Table.Row key={`${item.id}individual-challenge1`}>
      <Table.Cell>{item.submission_message}</Table.Cell>
      <Table.Cell>{item.submission_attachment_1 ? item.submission_attachment_1 : 'No Attachment Available'}</Table.Cell>
      <Table.Cell>{item.submission_attachment_2 ? item.submission_attachment_2 : 'No Attachment Available'}</Table.Cell>
      <Table.Cell>{item.submission_attachment_3 ? item.submission_attachment_3 : 'No Attachment Available'}</Table.Cell>
      <Table.Cell>
        {item.submission_image_link_1 ? imageModal(item.submission_image_link_1) : 'No phots submitted'}
        {item.submission_image_link_2 ? imageModal(item.submission_image_link_2) : null}
        {item.submission_image_link_3 ? imageModal(item.submission_image_link_3) : null}
      </Table.Cell>
    </Table.Row>
  );
};
