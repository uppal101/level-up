import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react';


class Notes extends Component {
  render() {
    return (
      <Form>
        <Form.Field control={TextArea} label="Additional Requests" placeholder="Put preferences here for your reward..." />
      </Form>
    );
  }
}

export default Notes;
