import axios from 'axios';
import * as CONST from '../constants/constants';

const postEditedChallenge = (props) => {
  const url = `/api/challenges/${props.challenge_id}`;
  return axios.put(url, props);
};

export const editChallenge = props => ({
  type: CONST.EDIT_CHALLENGE,
  payload: postEditedChallenge(props),
});

export const resetEditChallenge = () => ({
  type: CONST.RESET_EDIT_CHALLENGE,
});
