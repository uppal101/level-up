import axios from 'axios';
import * as CONST from '../constants/constants';

const fetchSubmissions = studentId => axios(`http://localhost:3000/api/submissions/students/${studentId}`)
.then(response => response.data);

const fetchStudent = () => axios('http://localhost:3000/api/student/login', { withCredentials: false }).then(response => response.data);

const pointsAndCohort = studentId => axios(`http://localhost:3000/api/students/${studentId}/info`, { withCredentials: false }).then(response => response.data);

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
