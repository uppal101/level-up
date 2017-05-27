import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Message } from 'semantic-ui-react';

class InsufficientPoints extends Component {
  constructor(props) {
    super(props);

    this.state = { redirect: false };
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return (
        <Redirect to="/student/rewards" />
      );
    }
    return (
      <Message
        color="orange"
        onDismiss={this.handleDismiss}
        header="Insufficient Points!"
        content="Unfortunately you do not have sufficient points for this reward...seems like a good time to lvl^"
      />
    );
  }
}

export default InsufficientPoints;
