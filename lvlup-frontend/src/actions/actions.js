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

export const quarterConverter = (quarter) => {
  switch (quarter) {
    case 'q1':
      return 'Quarter 1';
    case 'q2':
      return 'Quarter 2';
    case 'q3':
      return 'Quarter 3';
    case 'q4':
      return 'Quarter 4';
    default:
      return quarter;
  }
};

export const quarterPointFinder = (pointsObj) => {
  switch (pointsObj.currentQuarter) {
    case 'q1':
      return pointsObj.q1Earned;
    case 'q2':
      return pointsObj.q2Earned;
    case 'q3':
      return pointsObj.q3Earned;
    case 'q4':
      return pointsObj.q4Earned;
    default:
      return pointsObj.totalEarned;
  }
};
