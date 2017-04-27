import React, { Component } from 'react';
import { Form, Container } from 'semantic-ui-react';
import './admin-add-challenge-styles.css';

const categories = [
  { key: 'e', text: 'Education', value: 'education' },
  { key: 'co', text: 'Community', value: 'community' },
  { key: 'c', text: 'Career', value: 'career' },
  { key: 'l', text: 'Life', value: 'life' },
];

const campuses = [
  { key: 'sf', text: 'San Francisco', value: 'San Francisco' },
  { key: 'a', text: 'Austin', value: 'Austin' },
  { key: 'b', text: 'Boulder', value: 'Boulder' },
  { key: 'dp', text: 'Denver-Platte', value: 'Denver-Platte' },
  { key: 'dgt', text: 'Denver-Golden Triangle', value: 'Denver-Golden Triangle' },
  { key: 'ny', text: 'New York', value: 'New York' },
  { key: 'p', text: 'Phoenix', value: 'Seattle' },
  { key: 'all', text: 'All campuses', value: 'All Campuses' },
];

class AddChallengeForm extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Group widths="equal">
            <Form.Input label="Title" placeholder="Title" />
            <Form.Input label="Points" placeholder="Points" />
            <Form.Select label="Select Category" options={categories} placeholder="Select Category" />
            <Form.Select label="Select Campus" options={campuses} placeholder="Select Campus" />
          </Form.Group>
          <Form.Field>
            <label>Requirement</label>
            <input placeholder="Requirement" />
          </Form.Field>
          <Form.Button>Add Requirement</Form.Button>
          <Form.TextArea label="Description" placeholder="Describe challenge" />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Container>
    );
  }
}

export default AddChallengeForm;
