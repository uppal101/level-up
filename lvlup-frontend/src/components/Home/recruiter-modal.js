import React from 'react';
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react';
import RecruiterEmail from './recruiter-email';
import './homeview.css';

const RecruiterModal = () => (
  <Modal trigger={<Button color="orange" inverted>Recruiter's Click Here</Button>}>
    <Modal.Header>Recruiter Instructions</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="large" src={require('../../images/logo.png')} />
      <Modal.Description>
        <Header>Welcome Recruiters! Thank you for visiting!</Header>
        <div className="modalRecruiter">
          <p>Welcome to lvl^,  the Galvanize Capstone for Daniel Gardner <a href={'https://github.com/danielmarcgardner'}><Icon name="github" /></a><a href={'https://www.linkedin.com/in/danielmarcgardner/'}><Icon name="linkedin" /></a>,
            Thomas Stang <a href={'https://github.com/tkstang'}><Icon name="github" /></a><a href={'https://www.linkedin.com/in/thomas-stang/'}><Icon name="linkedin" /></a>, and Sanjeet Uppal <a href={'https://github.com/uppal101'}><Icon name="github" /></a><a href={'https://www.linkedin.com/in/sanjeet-uppal/'}><Icon name="linkedin" /></a>.
            This site will continue to be updated with new features so please continue to checkback.</p>

          <p>If you have a GitHub Account you can sign up as a student. If you do not have a GitHub account please fillout the email field below and we will send you an email with the credentials to log into our demo account.
            For demo purposes all emails are allowed to create admin accounts. To access all demo data please select cohort g42 for cohorts. Please note that you will need to confirm your admin account via an email that will be sent to your email address.
          </p>
          <p>As a student (with your own or our demo account) you can:</p>
          <ul>
            <li>View current submissions</li>
            <li>See achievements</li>
            <li>See the rewards earned</li>
            <li>Make challenge submissions</li>
            <li>Make reward requests</li>
          </ul>
          <p>As an admin you can:</p>
          <ul>
            <li>View all pending challenge submissions</li>
            <li>View all pending reward requests</li>
            <li>Approve or deny challenge submissions and reward requests</li>
            <li>Add or Edit Challenges </li>
            <li>Add or Edit Rewards</li>
          </ul>
          <p> Please note that we will be rolling back and re-seeding our database every so often to reset and re-seed.</p>
          <p>To close this modal please hit the escape key or click outside the modal.</p>
          <div className="recruiterEmail">
            <RecruiterEmail />
          </div>
        </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default RecruiterModal;
