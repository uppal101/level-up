import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import './challenge-submission-style.css';

class ChallengeTitle extends Component {
  render() {
    return (
      <Form className="challenge-submission-form">
        <Form.Field inline>
          <label>Challenge Title</label>
          <Input placeholder="Tutor Session" readOnly />
        </Form.Field>
      </Form>
    );
  }
}


export default ChallengeTitle;
