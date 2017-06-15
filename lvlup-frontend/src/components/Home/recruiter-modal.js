import React from 'react';
import { Button, Header, Icon, Modal, Image, Grid } from 'semantic-ui-react';
import RecruiterEmail from './recruiter-email-container';
import './homeview.css';

const RecruiterModal = () => (
  <Modal trigger={<Button color="orange" className="demo-button" inverted>Click Here for Demo Instructions</Button>}>
    <Modal.Header>Demonstration Version Instructions</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="large" src={require('../../images/logo.png')} />
      <Modal.Description className="demo-modal">
        <Header>Welcome Recruiters, Employers, Instuctors and Curious Developers!</Header>
        <div className="modalRecruiter">
          <div className="modalGreeting">Thank you for visiting lvl^! This Full-Stack web application was created as the Galvanize Web Development Immersive capstone project by three students of the g42 cohort:</div>

          <Grid columns="equal" padded>
            <Grid.Column>
              <a href={'https://github.com/danielmarcgardner'}><Icon name="github" /></a>
              Daniel Gardner&nbsp;
              <a href={'https://www.linkedin.com/in/danielmarcgardner/'}>@&nbsp;<Icon name="linkedin" /></a>
            </Grid.Column>
            <Grid.Column>
              <a href={'https://github.com/tkstang'}><Icon name="github" /></a>
              Thomas Stang&nbsp;
              <a href={'https://www.linkedin.com/in/thomas-stang/'}>@&nbsp;<Icon name="linkedin" /></a>
            </Grid.Column>
            <Grid.Column>
              <a href={'https://github.com/uppal101'}><Icon name="github" /></a>
              Sanjeet Uppal&nbsp;
              <a href={'https://www.linkedin.com/in/sanjeet-uppal/'}>@&nbsp;<Icon name="linkedin" /></a>
            </Grid.Column>
          </Grid>
          <div className="p-topmargin">
            <p>
            Before you continue to the landing page to read all about the project, <strong>please first read this important message in order to be able to demo the application.</strong> As this application was created specifically for use by students and administrators of Galvanize immersive programs, we have taken steps to ensure that potential recruiters and employers as well as other curious developers interested in the project would be able to create accounts and demo the application.  First and foremost we created a demo version of the app so users can play around with the application without impacting the live version used by students and administrators.  Our demo version allows you to explore as both a student and an administrator...</p>

            <p>
              <strong><u>To Demo as a Student:</u></strong>  Our app uses GitHub OAuth for student authorization.  If you have an existing GitHub Account you can simply sign up as a student.  If you do not have a GitHub account please fill out the E-mail field below and we will send you an E-mail with the credentials to log in to our demo account.  If using your own existing GitHub to sign up as a student when you log in for the first time please <b>select g42 as your cohort</b>.
          </p>

            <p>
              <strong><u>To Demo as an Administrator:</u></strong>  For demo purposes all E-mail addresses are able to create admin accounts.  To access all demo data <b>please select cohort g42 for the cohort you are responsible for</b>.  Please note that you will need to confirm your admin account via a confirmation E-mail that will be sent to your E-mail address.
          </p>
          </div>
          <div className="p-left">
            <p>With a student demo account you may:</p>
            <ul>
              <li>View current submissions</li>
              <li>See achievements</li>
              <li>See the rewards earned</li>
              <li>Create challenge submissions</li>
              <li>Create reward requests</li>
            </ul>
            <p>With an admin demo account you may:</p>
            <ul>
              <li>View all pending challenge submissions</li>
              <li>View all pending reward requests</li>
              <li>Approve or deny challenge submissions</li>
              <li>Approve of deny reward requests</li>
              <li>Add or edit challenges </li>
              <li>Add or edit rewards</li>
            </ul>
          </div>
          <p> Please note that we will be rolling back and re-seeding our database every so often to reset and re-seed.</p>
          <p>To request the demo student account please enter submit the form below. </p>
          <p> To close this modal please hit the escape key or click outside the modal.</p>
          <div className="recruiterEmail">
            <RecruiterEmail />
          </div>
        </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default RecruiterModal;
