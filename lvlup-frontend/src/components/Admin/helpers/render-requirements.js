import React from 'react';
import { Form } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { renderField } from './render-fields';

export const renderRequirementInputs = (numOfInputs) => {
  const requirementInputComponents = [];
  for (let i = 1; i <= numOfInputs; i++) {
    requirementInputComponents.push((
      <Form.Group key={i}>
        <Form.Field width={16}>
          <Field
            name={`requirements_${i}`}
            component={renderField}
            type="text"
            label="Requirement"
            placeholder="Requirement"
          />
        </Form.Field>
      </Form.Group>
    ));
  }
  return requirementInputComponents;
};
