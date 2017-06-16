import React from 'react';
import { Form } from 'semantic-ui-react';
import { Field } from 'redux-form';
import renderIf from 'render-if';
import { renderField } from '../Admin/helpers/render-fields';
import { required, email } from '../Admin/helpers/validations';

const RecruiterEmail = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="recruiterEmail" >
      {renderIf(props.recruiterDemo.fulfilled === false)(<Form className="email" onSubmit={handleSubmit(props.recruiter)}>
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
      {renderIf(props.recruiterDemo.fulfilled === true)(
        <h3>Please check your email for GitHub Login Info for the student OAuth</h3>,
    )}
    </div>
  );
};

export default RecruiterEmail;
