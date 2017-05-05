import axios from 'axios';
import * as CONST from '../constants/constants';

const submissionApproval = (id, props) => axios.put(`/api/submissions/${id}/admin`, props).then(response => response.data);

export const submissionFormAdmin = (id, props) => ({
  type: CONST.ADMIN_SUBMISSION_FORM,
  payload: submissionApproval(id, props),
});
