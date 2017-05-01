import axios from 'axios';
import * as CONST from '../constants/constants';

const fetchStudent = () => axios('http://localhost:3000/api/student/login', { withCredentials: false }).then(response => response.data);
const pointAndCohort = id => axios(`http://localhost:3000/api/students/${id}/info`, { withCredentials: false }).then(response => response.data);

export const loggingInAction = () => ({
  type: CONST.STUDENT_LOGIN,
  payload: fetchStudent(),
});

export const moreStudentInfo = idStudent => ({
  type: CONST.POINTS_COHORT,
  payload: pointAndCohort(idStudent),
});
