import axios from 'axios';
import * as CONST from '../constants/constants';

const pendingSubmissions = cohortId => axios(`/api/submissions/cohorts/${cohortId}`)
.then(response => response.data);

const pendingRequests = cohortId => axios(`/api/requests/students/${cohortId}`)
.then(response => response.data);


export const submissionsAction = cohortId => ({
  type: CONST.ADMIN_SUBMISSIONS,
  payload: pendingSubmissions(cohortId),
});

export const requestsAction = cohortId => ({
  type: CONST.ADMIN_REQUESTS,
  payload: pendingRequests(cohortId),
});
