import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const renderTechCards = tech => tech.map(technologies => (
  <Card centered color="orange" key={technologies.tech}>
    <Card.Content>
      <Image className="imageCard" size="tiny" src={require(`../../../images/${technologies.image}.png`)} />
      <Card.Header className="cardHeader">
        {technologies.tech}
      </Card.Header>
      <Card.Meta>
        {technologies.stack}
      </Card.Meta>
      <Card.Description className="cardDescription">
        {technologies.description}
      </Card.Description>
    </Card.Content>
  </Card>
  ));

export default renderTechCards;
