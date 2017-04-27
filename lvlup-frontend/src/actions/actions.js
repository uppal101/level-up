import axios from 'axios';
import * as CONST from '../constants/constants';

// const config = { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE', 'Content-Type': 'application/json' } };
// const config = { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,PATCH,POST,DELETE', 'Content-Type': 'application/json' } };


const fetchStudent = () => axios('http://lvlup-testing-backend.herokuapp.com/api/student/login', { withCredentials: false }).then(response => response.data);
// const oauthCheck = () => axios('http://lvlup-testing-backend.herokuapp.com/api/auth/github', { withCredentials: false }).then(response => response.data);

export const loggingInAction = () => ({
  type: CONST.STUDENT_LOGIN,
  payload: fetchStudent(),
});

// export const logIn = () => ({
//   type: CONST.STUDENT_LOGGEDIN,
//   payload: oauthCheck(),
// });
