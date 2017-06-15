import React from 'react';
import AddACohortForm from './add-cohort-form-container';
import renderIf from 'render-if';
import AddCohortComplete from './add-cohort-confirmed-container';

const AddCohortPage = props => (
  <div>
    {renderIf(props.addCohort.fulfilled === false)(<AddACohortForm />)}
    {renderIf(props.addCohort.fulfilled === true)(<AddCohortComplete />)}
  </div>
);

export default AddCohortPage;
