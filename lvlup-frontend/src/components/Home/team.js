import React from 'react';
import { Grid, Card, Image, Reveal, Icon } from 'semantic-ui-react';
import './homeview.css';

const Team = () => (
  <div className="team-cards">
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Card.Group>
            <Card fluid className="team-card" centered color="orange">
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image className="team-image" src="https://avatars.githubusercontent.com/uppal101" />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Card.Content>
                    <Card.Description>
                      <div className="about-reveal">
                        Sanjeet researched Redux Forms in order to handle multiple input changes to the store. She implemented the validation error messages seen on most of the forms used in the application. Her main focus on the front-end was creating dynamic admin views. Sanjeet researched and implemented Jest for testing connected components and reducers.
                    </div>
                    </Card.Description>
                  </Card.Content>
                </Reveal.Content>
              </Reveal>
              <Card.Content>
                <Card.Header>
                  <p className="name">Sanjeet Uppal</p>
                </Card.Header>
                <Card.Description>
                  <div className="about-links">
                    <a href={'https://github.com/uppal101'}><Icon size="big" color="orange" name="github square" />Github Profile</a><br />
                    <a href={'https://www.linkedin.com/in/sanjeet-uppal/'}><Icon size="big" color="orange" name="linkedin square" />LinkedIn Profile</a><br />
                    <a href={'mailto:sanjeet.uppal92@gmail.com'}><Icon size="big" color="orange" name="mail square" />E-mail Sanjeet</a>
                  </div>
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid className="team-card" centered color="orange">
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
                  <p className="name">Thomas Stang</p>
                </Card.Header>
                <Card.Description>
                  <div className="about-links">
                    <a href={'https://github.com/tkstang'}><Icon size="big" color="orange" name="github square" />Github Profile</a><br />
                    <a href={'https://www.linkedin.com/in/thomas-stang/'}><Icon size="big" color="orange" name="linkedin square" />LinkedIn Profile</a><br />
                    <a href={'mailto:stang.tk@gmail.com'}><Icon size="big" color="orange" name="mail square" />E-mail Thomas</a>
                  </div>
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid className="team-card" centered color="orange">
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Image className="team-image" src="https://avatars2.githubusercontent.com/u/22782154?v=3" />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Card.Content>
                    <Card.Description>
                      <div className="about-reveal">
                      Daniel's biggest contribution to the lvl^ was Authentication across the app and tying the front-end and back-end together. Using OAuth for students and JWT Tokens in cookies he was able to authenticate users and keep them logged in. This includes the email authentication process needed for signup for admins. In addition, on the front-end he built complete views on the Student and Admin side adding in Redux state to make lvl^ responsive to changes in other areas of the app.  On the back-end he managed testing with Chai, Mocha, and Super-Test making sure they stayed updated with the changing back-end needs, applying middleware and maintaining routes.
                    </div>
                    </Card.Description>
                  </Card.Content>
                </Reveal.Content>
              </Reveal>
              <Card.Content>
                <Card.Header>
                  <p className="name">Daniel Gardner</p>
                </Card.Header>
                <Card.Description>
                  <div className="about-links">
                    <a href={'https://github.com/danielmarcgardner'}><Icon size="big" color="orange" name="github square" />Github Profile</a><br />
                    <a href={'https://www.linkedin.com/in/danielmarcgardner/'}><Icon size="big" color="orange" name="linkedin square" />LinkedIn Profile</a><br />
                    <a href={'mailto:daniel.marc.gardner@gmail.com'}><Icon size="big" color="orange" name="mail square" />E-mail Daniel</a>
                  </div>
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Team;
