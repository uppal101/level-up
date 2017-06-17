import React, { Component } from 'react';
import { Modal, Button, Image } from 'semantic-ui-react';
import LoginGithub from './login-github';
import AdminLogin from './admin-login';

class LoginModal extends Component {
  state = { modalOpen: false }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  render() {
    return (
      <Modal
        trigger={<Button color="orange" inverted onClick={this.handleOpen}>Start &nbsp;lvling^</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        >
      <Modal.Header>Student and Admin Log In and Sign Up</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src={require('../../images/logo.png')} />
        <Modal.Description>
          <div>
            <p> Student: <LoginGithub /></p>
            <p onClick={this.handleClose}> Admin: <AdminLogin /></p>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
  }
}
export default LoginModal;
