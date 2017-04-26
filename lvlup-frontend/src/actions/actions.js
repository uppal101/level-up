import axios from 'axios';
import * as CONST from '../constants/constants';

const config = { headers: { 'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE', 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } };

const fetchStudent = () => axios.get('http://localhost:3000/api/student/login', config).then(response => response.data);

export const loggingInAction = () => ({
  type: CONST.STUDENT_LOGIN,
  payload: fetchStudent(),
});
