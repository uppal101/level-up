import React, { Component } from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';
import technologiesUsed from '../../helpers/technologies';
import './homeview.css';

class Technologies extends Component {
  renderCards(tech) {
    return tech.map(technologies => (
      <Card centered color="orange">
        <Card.Content>
          <Image className="imageCard" size="tiny" src={require(`../../images/${technologies.image}.png`)} />
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
  }
  render() {
    return (
      <div className="techCards">
        <Grid.Column centered width={16} id="technologies-column">
          <div className="cardDiv">
            <h1 className="techHeader" >Technologies Used To Build lvl^</h1>
            <Card.Group className="technologyCards">
              {this.renderCards(technologiesUsed)}
            </Card.Group>
          </div>
        </Grid.Column>
      </div>
    );
  }
}
export default Technologies;
