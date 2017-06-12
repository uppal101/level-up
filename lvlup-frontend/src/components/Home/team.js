import React, { Component } from 'react';
import { Grid, Card, Image, Reveal, Segment } from 'semantic-ui-react';
import './homeview.css';

const Team = props => (
  <div className="team-cards">
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Card.Group>
            <Card fluid className="team-card" centered raised="true" color="orange">
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image className="team-image" src="https://avatars.githubusercontent.com/tkstang" />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Card.Content>
                    <Card.Description>
                      <div className="about-reveal">
                      Thomas researched and learned Bookshelf.js Object Relational Mapping in order to use it for the project. He leveraged the library's models and collections to create a back-end API for the project capable of handling complicated database relationships. The algorithm which was used for calculating and properly distributing points earned and used by students was written by Thomas. On the front-end he built complete views for both admin and student portions of the app. He was responsible for the majority of the design and CSS styling of the application and for bulding the landing page you currently see right now!
                    </div>
                    </Card.Description>

                  </Card.Content>
                </Reveal.Content>
              </Reveal>
              <Card.Content>
                <Card.Header>
                Thomas Stang
              </Card.Header>
                <Card.Meta>
              Blah
            </Card.Meta>
                <Card.Description />
              </Card.Content>
            </Card>
            <Card fluid className="team-card" centered raised="true" color="orange">
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
            <Card fluid className="team-card" centered raised="true" color="orange">
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image className="team-image" src="https://avatars2.githubusercontent.com/u/22782154?v=3" />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Card.Content>
                    <Card.Description>
                      <div className="about-reveal">
                      Daniel's biggest contribution to the lvl^ was Authentication accross the app and tying the Front End and Back End together. Using OAuth for students and JWT Tokens in cookies he was able to authenticate users and keep them logged in. This includes the email authentication process needed for signup for admins. In addition, on the Front End he built complete views on the Student and Admin side adding in Redux state to make lvl^ responsive to changes in other areas of the app.  On the Back End, he also managed the testing with Chai, Mocha, and Super-Test making sure they stayed updated with the changing backend needs, applying middleware to routes and maintaining routes.
                    </div>
                    </Card.Description>
                  </Card.Content>
                </Reveal.Content>
              </Reveal>
              <Card.Content>
                <Card.Header>
                Daniel Gardner
              </Card.Header>
                <Card.Meta>
              Blah
            </Card.Meta>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Team;
