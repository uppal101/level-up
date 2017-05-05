import axios from 'axios';
import * as CONST from '../constants/constants';

const logoutStudent = () => axios.get('/api/student/logout').then(response => response.data);

const logoutAdmin = () => axios.get('/api/admin/logout').then(response => response.data);

export const loggingOutStudent = () => ({
  type: CONST.STUDENT_LOGOUT,
  payload: logoutStudent(),
});

export const loggingOutAdmin = () => ({
  type: CONST.ADMIN_LOGOUT,
  payload: logoutAdmin(),
});
