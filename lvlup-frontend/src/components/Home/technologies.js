import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

const Technologies = () => (
  <div>
    <Grid.Column width={16} id="technologies-column">
      <div className="cardDiv">
        <Card.Group className="technologyCards">
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/javascript.png')} />
              <Card.Header>
                JavaScript
              </Card.Header>
              <Card.Meta>
                Full Stack
              </Card.Meta>
              <Card.Description>
                lvl^ is written in both the front end and back end with JavaScript.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/github.png')} />
              <Card.Header>
                GitHub
              </Card.Header>
              <Card.Meta>
                Full Stack
              </Card.Meta>
              <Card.Description>
                GitHub was used to for collaboration on lvl^ as well as OAuth on the backend.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/react.png')} />
              <Card.Header>
                React
              </Card.Header>
              <Card.Meta>
                Front End
              </Card.Meta>
              <Card.Description>
                lvl^'s front end is built with React.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/redux.png')} />
              <Card.Header>
                Redux
              </Card.Header>
              <Card.Meta>
                Front End
              </Card.Meta>
              <Card.Description>
                Redux is used to control lvl^'s state on the front end.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/react-router.png')} />
              <Card.Header>
                React-Router-DOM
              </Card.Header>
              <Card.Meta>
                Front End
              </Card.Meta>
              <Card.Description>
                React-Router-DOM is used for navigation on the front end.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/redux-forms.png')} />
              <Card.Header>
                Redux-Forms
              </Card.Header>
              <Card.Meta>
                Front End
              </Card.Meta>
              <Card.Description>
                Redux-Forms is used for all of our form inputs.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/semantic-ui.png')} />
              <Card.Header>
                Semantic UI
              </Card.Header>
              <Card.Meta>
                Front End
              </Card.Meta>
              <Card.Description>
                lvl^'s front end is designed with components from Semantic UI.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/moment.png')} />
              <Card.Header>
                Moment.js
              </Card.Header>
              <Card.Meta>
                Full Stack
              </Card.Meta>
              <Card.Description>
                Moment.js is essential for how lvl^ stores and compares dates.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/jest.png')} />
              <Card.Header>
                Jest
              </Card.Header>
              <Card.Meta>
                Front End
              </Card.Meta>
              <Card.Description>
                Jest is used to test our React components.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            {/* BACKEND */}
            <Card.Content>
              <Image size="mini" src={require('../../images/nodejs-icon.svg')} />
              <Card.Header>
                Node.js
              </Card.Header>
              <Card.Meta>
                Back End
              </Card.Meta>
              <Card.Description>
                lvl^'s backend uses a node enviornment on the server.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/express.png')} />
              <Card.Header>
                Express
              </Card.Header>
              <Card.Meta>
                Back End
              </Card.Meta>
              <Card.Description>
                Express handles all of the routes for lvl^'s server.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/knex.png')} />
              <Card.Header>
                Knex
              </Card.Header>
              <Card.Meta>
                Back End
              </Card.Meta>
              <Card.Description>
                Knex handles all seeds and migrations.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/bookshelf.png')} />
              <Card.Header>
                Bookshelf
              </Card.Header>
              <Card.Meta>
                Back End
              </Card.Meta>
              <Card.Description>
                Bookshelf is used to connect the Express Server to the database and query the database.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/postgresql.png')} />
              <Card.Header>
                PostgreSQL
              </Card.Header>
              <Card.Meta>
                Back End
              </Card.Meta>
              <Card.Description>
                lvl^ uses a PostgreSQL database for storing all information.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/oauth.png')} />
              <Card.Header>
                OAuth2
              </Card.Header>
              <Card.Meta>
                Back End
              </Card.Meta>
              <Card.Description>
                OAuth2 is used for student login and signup. lvl^ uses the GitHub OAuth to check credentials.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/passport.png')} />
              <Card.Header>
                Passport
              </Card.Header>
              <Card.Meta>
                Back End
              </Card.Meta>
              <Card.Description>
                Passport is used in conjunction with OAuth to maintain the session of the authenticated user from GitHub.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/jwt.png')} />
              <Card.Header>
                JWT
              </Card.Header>
              <Card.Meta>
                Back End
              </Card.Meta>
              <Card.Description>
                Login for admins uses JWT Tokens for authentication and authorization. The tokens are transported in cookies.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/nodemailer.png')} />
              <Card.Header>
                NodeMailer
              </Card.Header>
              <Card.Meta>
                Back End
              </Card.Meta>
              <Card.Description>
                NodeMailer is used to send confirmation emails when an admin signs up for an account. It is also used to send login information to recruiters and curious engineers for our demo site.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/bluebird.png')} />
              <Card.Header>
                Bluebird
              </Card.Header>
              <Card.Meta>
                Back End
              </Card.Meta>
              <Card.Description>
                Bluebird is used to promisify the points algorithm
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/chai.png')} />
              <Card.Header>
                Chai
              </Card.Header>
              <Card.Meta>
                Back End
              </Card.Meta>
              <Card.Description>
                Chai is used for testing lvl^'s back end routes and functions.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/mocha.svg')} />
              <Card.Header>
                Mocha
              </Card.Header>
              <Card.Meta>
                Back End
              </Card.Meta>
              <Card.Description>
                Mocha is lvl's test runner for the backend. Used in conjunction with Chai.
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    </Grid.Column>
    {/* <div>
        <Image src={require('../../images/nodejs-icon.svg')} className="technologyImage" size="tiny" />
        <Image src={require('../../images/express.png')} className="technologyImage" size="tiny" />
        <Image src={require('../../images/knex.png')} className="technologyImage" size="tiny" />
        <Image src={require('../../images/bookshelf.png')} className="technologyImage" size="tiny" />
        <Image src={require('../../images/postgresql.png')} className="technologyImage" size="tiny" />
        <Image src={require('../../images/jwt.png')} className="technologyImage" size="tiny" />
        <Image src={require('../../images/oauth.png')} className="technologyImage" size="tiny" />
        <Image src={require('../../images/passport.png')} className="technologyImage" size="tiny" />
        <Image src={require('../../images/nodemailer.png')} className="technologyImage" size="tiny" />
        <Image src={require('../../images/moment.png')} className="technologyImage" size="tiny" />
        <Image src={require('../../images/bluebird.png')} className="technologyImage" size="tiny" />
        <Image src={require('../../images/chai.png')} className="technologyImage" size="tiny" />
        <Image src={require('../../images/mocha.svg')} className="technologyImage" size="tiny" />
      </div> */}
  </div>
  );
export default Technologies;
