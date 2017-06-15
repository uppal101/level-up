import axios from 'axios';
import * as CONST from '../constants/constants';

export const postNewChallenge = (props) => {
  const url = '/api/challenges';
  return axios.post(url, props);
};

export const addChallenge = props => ({
  type: CONST.ADD_CHALLENGE,
  payload: postNewChallenge(props),
});

export const resetAddChallenge = () => ({
  type: CONST.RESET_ADD_CHALLENGE,
});
