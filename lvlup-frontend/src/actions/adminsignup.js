import axios from 'axios';

const signupRequest = (props) => {
  const url = 'http://localhost:3000/api/admin/signup';
  return axios.post(url, props);
};

export const signup = props => ({
  type: 'SIGNUP',
  payload: signupRequest(props),
});
