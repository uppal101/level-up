import axios from 'axios';
import * as CONST from '../constants/constants';

const fetchOAuth = () => axios.get('http://localhost:3000/api/auth/github', { withCredentials:true }).then(response => response.data);

export const loggingInAction = () => ({
  type: CONST.STUDENT_LOGGEDIN,
  payload: fetchOAuth(),
});
