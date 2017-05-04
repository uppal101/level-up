import axios from 'axios';
import * as CONST from '../constants/constants';

const submissionFetch = id => axios(`/api/submissions/${id}`).then(response => response.data);

const submissionApproval = (id, props) => axios.put(`/api/submissions/${id}/admin`, props).then(response => response.data);

export const submissionForApproval = id => ({
  type: CONST.STUDENT_SUBMISSION_ADMIN_FULFILLED,
  payload: submissionFetch(id),
});

export const submissionFormAdmin = (id, props) => ({
  type: CONST.ADMIN_SUBMISSION_FORM,
  payload: submissionApproval(id, props),
});
