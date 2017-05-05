import axios from 'axios';

const loginRequest = (props) => {
  const url = '/api/admin/login';
  return axios.post(url, props).then(response => response.data);
};

export const login = props => ({
  type: 'LOGIN',
  payload: loginRequest(props),
});
