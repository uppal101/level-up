import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

const Technologies = () => (
  <div>
    <Grid.Column width={8} id="technologies-columnL">
      <u>The Front End Technologies Used:</u> <div>
        <Card.Group className="technologyCards">
          <Card>
            <Card.Content>
              <Image size="mini" src={require('../../images/javascript.png')} />
              <Card.Header>
                JavaScript
              </Card.Header>
              <Card.Meta>
                Front End and Back End
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
                Front End and Back End
              </Card.Meta>
              <Card.Description>
                GitHub was used to for collaboration on lvl^ as well as OAuth on the backend
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
                lvl^'s front end is built with React
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>

        {/* <Image src={require('../../images/github.png')} className="technologyImage" size="tiny" />
          <Image src={require('../../images/react.png')} className="technologyImage" size="tiny" />
          <Image src={require('../../images/react-router.png')} className="technologyImage" size="tiny" />
          <Image src={require('../../images/redux.png')} className="technologyImage" size="tiny" />
          <Image src={require('../../images/redux-forms.png')} className="technologyImage" size="tiny" />
          <Image src={require('../../images/semantic-ui.png')} className="technologyImage" size="tiny" />
          <Image src={require('../../images/moment.png')} className="technologyImage" size="tiny" />
          <Image src={require('../../images/jest.png')} className="technologyImage" size="tiny" /> */}
      </div>
    </Grid.Column>
    <Grid.Column textAlign="center" width={8} id="technologies-columnR">
      <u>The Back End Technologies Used:</u>
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
    </Grid.Column>
  </div>
  );
export default Technologies;
