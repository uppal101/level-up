import React from 'react';
import { Form, Loader } from 'semantic-ui-react';
import { Field } from 'redux-form';
import { renderTextAreaField } from '../../Admin/helpers/render-fields';

const RewardRequestForm = ({ studentLoginInfo, reward, rewardRequest, handleSubmit }) => {
  const submit = (values) => {
    values.student_id = studentLoginInfo.id;
    values.cohort_id = studentLoginInfo.cohort_id;
    values.category_id = reward.category_id;
    values.reward_id = reward.id;
    rewardRequest(values);
  };
  if (!reward.name) {
    return <Loader active inline="centered"> Loading </Loader>;
  }
  return (
    <div className="lvl-table">
      <h2 className="header">{`Reward Request: ${reward.name}  (${reward.point_cost} pts)`}</h2>
      <Form className="request-form" onSubmit={handleSubmit(submit)}>
        <Form.Field inline>
          <Field
            name="notes"
            component={renderTextAreaField}
            label="Notes For Your Request"
            placeholder="Enter any preferences for your reward.."
          />
        </Form.Field>
        <Form.Button basic color="orange">lvl^</Form.Button>
      </Form>
    </div>
  );
};

export default RewardRequestForm;
