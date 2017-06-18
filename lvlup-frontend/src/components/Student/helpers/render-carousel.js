import React from 'react';
import { Card } from 'semantic-ui-react';
import formatDate from '../../../helpers/format-date';
import '../dashboard/dashboard-styles.css';

const renderCarousel = props => (
  props.submissions.filter(submission => submission.submission_status === 'Approved').map(item => (
    <Card key={`${item.id}student-dashboard3`}>
      <Card.Content>
        <Card.Header>
          {item.challenge.name}
        </Card.Header>
        <Card.Meta>
          <span className="date">
            Points: {item.challenge.point_value}
          </span>
        </Card.Meta>
        <Card.Description className="carousel-card">
          <p><b>Description: </b> {item.challenge.description}</p>
          <p><b>Submission Details: </b> {item.submission_message}</p>
          <p><b>Evaluation: </b> {item.evaluation_message ? item.evaluation_message : 'No Evaluation Available'} </p>
          <p><b>Date Achieved: </b> {formatDate(item.created_at)} </p>
        </Card.Description>
      </Card.Content>
    </Card>
  ))
);

export default renderCarousel;
