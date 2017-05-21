import axios from 'axios';
import * as CONST from '../constants/constants';

const fetchSubmissions = studentId => axios(`/api/submissions/students/${studentId}`)
.then(response => response.data);

const fetchRequests = studentId => axios(`/api/requests/students/${studentId}`)
.then(response => response.data);

const fetchStudent = () => axios('/api/student/login', { withCredentials: false }).then(response => response.data);

const pointsAndCohort = studentId => axios(`/api/students/${studentId}/info`, { withCredentials: false }).then(response => response.data);

export const loggingInAction = () => ({
  type: CONST.STUDENT_LOGIN,
  payload: fetchStudent(),
});

export const moreStudentInfo = studentId => ({
  type: CONST.POINTS_COHORT,
  payload: pointsAndCohort(studentId),
});

export const submissionsAction = studentId => ({
  type: CONST.SUBMISSIONS,
  payload: fetchSubmissions(studentId),
});

export const requestsAction = studentId => ({
  type: CONST.REQUESTS,
  payload: fetchRequests(studentId),
});
