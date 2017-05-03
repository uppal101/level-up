import axios from 'axios';
import * as CONST from '../constants/constants';

const fetchSubmissions = studentId => axios(`/api/submissions/students/${studentId}`)
.then(response => response.data);

const fetchRequests = studentId => axios(`/api/requests/students/${studentId}`)
.then(response => response.data);

const fetchAdmin = () => axios.post('/api/admin/login', { withCredentials: false });


export const submissionsAction = cohortId => ({
  type: CONST.ADMIN_SUBMISSIONS,
  payload: pendingSubmissions(cohortId),
});

export const requestsAction = cohortId => ({
  type: CONST.ADMIN_REQUESTS,
  payload: pendingRequests(cohortId),
});
