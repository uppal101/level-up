import axios from 'axios';
import * as CONST from '../constants/constants';

const finishProfile = props => axios.put('/api/student/login', props)
.then(response => response.data);

export const signupStudent = props => ({
  type: CONST.STUDENT_SIGNUP,
  payload: finishProfile(props),
});
