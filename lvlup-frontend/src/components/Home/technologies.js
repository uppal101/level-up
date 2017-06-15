import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import technologiesUsed from '../../helpers/technologies';
import renderTechCards from '../Admin/helpers/render-tech-cards';
import './homeview.css';

const Technologies = () => (
  <div className="techCards">
    <Grid.Column width={16} id="technologies-column">
      <div className="cardDiv">
        <h1 className="techHeader" >Technologies Used To Build lvl^</h1>
        <Card.Group className="technologyCards">
          {renderTechCards(technologiesUsed)}
        </Card.Group>
      </div>
    </Grid.Column>
  </div>
);

export default Technologies;
