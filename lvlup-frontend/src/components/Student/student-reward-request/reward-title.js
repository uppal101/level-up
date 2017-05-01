import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import './reward-request-style.css';

class RewardTitle extends Component {
  render() {
    return (
      <Form className="reward-title">
        <Form.Field inline>
          <label>Reward Title</label>
          <Input placeholder="Pizza Party" readOnly />
        </Form.Field>
      </Form>
    );
  }
}


export default RewardTitle;
