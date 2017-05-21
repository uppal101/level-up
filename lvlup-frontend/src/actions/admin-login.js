import axios from 'axios';
import * as CONST from '../constants/constants';

const loginRequest = (props) => {
  const url = '/api/admin/login';
  return axios.post(url, props).then(response => response.data);
};

export const login = props => ({
  type: CONST.ADMIN_LOGIN,
  payload: loginRequest(props),
});
