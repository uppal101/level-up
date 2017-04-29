import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import './challenge-submission-style.css';

class Links extends Component {
  render() {
    return (
      <Form className="links">
        <Form.Field inline>
          <label>Link 1</label>
          <Input />
        </Form.Field>
        <Form.Field inline>
          <label>Link 2</label>
          <Input />
        </Form.Field>
        <Form.Field inline>
          <label>Link 3</label>
          <Input />
        </Form.Field>

      </Form>
    );
  }
}


export default Links;
