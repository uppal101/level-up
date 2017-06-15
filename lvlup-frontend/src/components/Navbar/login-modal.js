import React from 'react';
import { Modal, Button, Image } from 'semantic-ui-react';
import LoginGithub from './login-github';
import AdminLogin from './admin-login';

const LoginModal = () => (
  <Modal trigger={<Button color="orange" inverted>Start &nbsp;lvling^</Button>} closeIcon="close">
    <Modal.Header>Student and Admin Log In and Sign Up</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src={require('../../images/logo.png')} />
      <Modal.Description>
        <div>
          <p> Student: <LoginGithub /></p>
          <p> Admin: <AdminLogin /></p>
        </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default LoginModal;
