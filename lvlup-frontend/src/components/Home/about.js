import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import './homeview.css';

const About = () => (
  <div>
    <Grid>
      <Grid.Row>
        <Grid.Column textAlign="center" width={16} id="about-column">
          <h1 id="about-header">Meet the lvl^ Team</h1>
          <Segment raised id="about-segment">
            The lvl^ project was built by a team of three Galvanize web development immersive students over the span of only two weeks at the end of the third quarter of the program, followed by one additional week at the end of the program (used to focus on polishing, refactoring, optimization, feature additions and incorporation of computer science curriculum). As a team we tried to make sure we each had our hands on a little bit of every aspect of the code (back-end, front-end and testing). A test driven development approach was used by each team member to write tests before writing all back-end routes.  All team members focused on using the project to dive deeper into React and Redux, familiarizing themselves with many React and Redux libraries and building react components utilizing Redux and immutable data patterns for complex state management.  While all team members were involved in the code base end-to-end, we each had some areas of focus which you may read about by hovering over each team member's picture.</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default About;
