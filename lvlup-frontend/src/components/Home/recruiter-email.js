import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Field } from 'redux-form';
import renderIf from 'render-if';
import { renderField } from '../Admin/admin-common/render-fields';
import { required, email } from '../Admin/admin-common/validations';

class RecruiterEmail extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="recruiterEmail" >
        {renderIf(!this.recruiter)(<Form className="email" onSubmit={handleSubmit(this.props.recruiter)}>
          <Form.Field inline>
            <Field
              name="email"
              component={renderField}
              type="email"
              label=" Your E-mail:"
              placeholder="Student login credentials for demo will be sent here"
              validate={[required, email]}
            />
          </Form.Field>
          <Form.Button basic color="orange">Request Login Info</Form.Button>
        </Form>,
      )}
        {renderIf(this.recruiter)(
          <p>Please check your email for GitHub Login Info for the student OAuth</p>,
      )}
      </div>
    );
  }
}

export default RecruiterEmail;
