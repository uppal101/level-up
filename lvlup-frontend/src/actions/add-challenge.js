import axios from 'axios';
import * as CONST from '../constants/constants';

const postNewChallenge = (props) => {
  const url = '/api/challenges';
  return axios.post(url, props);
};

export const addChallenge = props => ({
  type: 'ADD_CHALLENGE',
  payload: postNewChallenge(props),
});
