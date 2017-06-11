import React, { Component } from 'react';
import { Grid, Card, Image, Reveal } from 'semantic-ui-react';
import './homeview.css';

const Team = props => (
  <div className="team-cards">
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Card className="team-card" centered raised="true" color="orange">
            <Reveal animated="move up">
              <Reveal.Content visible>
                <Image className="team-image" src="https://avatars.githubusercontent.com/tkstang" />
              </Reveal.Content>
              <Reveal.Content hidden>
                <div>Some text</div>
              </Reveal.Content>
            </Reveal>
            <Card.Content>
              <Card.Header>
                Thomas Stang
              </Card.Header>
              <Card.Meta>
              Blah
            </Card.Meta>
              <Card.Description>
              Thomas is the man
            </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card className="team-card" centered raised="true" color="orange">
            <Reveal animated="move up">
              <Reveal.Content visible>
                <Image className="team-image" src="https://avatars.githubusercontent.com/uppal101" />
              </Reveal.Content>
              <Reveal.Content hidden>
                <div>Some text</div>
              </Reveal.Content>
            </Reveal>
            <Card.Content>
              <Card.Header>
                Sanjeet Uppal
              </Card.Header>
              <Card.Meta>
              Blah
            </Card.Meta>
              <Card.Description>
              Thomas is the man
            </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card className="team-card" centered raised="true" color="orange">
            <Reveal animated="move up">
              <Reveal.Content visible>
                <Image className="team-image" src="https://avatars2.githubusercontent.com/u/22782154?v=3" />
              </Reveal.Content>
              <Reveal.Content hidden>
                <div>Some text</div>
              </Reveal.Content>
            </Reveal>
            <Card.Content>
              <Card.Header>
                Daniel Gardner
              </Card.Header>
              <Card.Meta>
              Blah
            </Card.Meta>
              <Card.Description>
              Thomas is the man
            </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Team;
