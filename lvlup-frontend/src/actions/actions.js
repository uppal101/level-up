import axios from 'axios';
import * as CONST from '../constants/constants';

const fetchStudent = () => axios('http://lvlup-testing-backend.herokuapp.com/api/student/login', { withCredentials: false }).then(response => response.data);
const pointAndCohort = id => axios('http://lvlup-testing-backend.herokuapp.com/api/students/${id}/info', { withCredentials: false }).then(response => response.data);

export const loggingInAction = () => ({
  type: CONST.STUDENT_LOGIN,
  payload: fetchStudent(),
});

export const moreStudentInfo = idStudent => ({
  type: CONST.POINTS_COHORT,
  payload: pointAndCohort(idStudent),
});
