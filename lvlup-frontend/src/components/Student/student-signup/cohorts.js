import React, { Component } from 'react';
import { Dropdown, Form } from 'semantic-ui-react';

const cohorts = [
  { key: '42', text: 'G42', value: 'g42' },
  { key: '52', text: 'G52', value: 'g52' },
];

class Cohorts extends Component {
  render() {
    return (
      <Form className="forms">
        <Form.Field inline>
          <label>Cohorts</label>
          <Dropdown placeholder="Cohorts" search selection options={cohorts} />
        </Form.Field>
      </Form>

    );
  }
}

export default Cohorts;
