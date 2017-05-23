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

const inactiveChallenge = (reward) => {
  const url = `/api/challenges/${reward.id}`;
  return axios.put(url, { active: 'Inactive' }).then(res => res.data);
};

export const makeChallengeInactive = reward => ({
  type: CONST.INACTIVE_CHALLENGE,
  payload: inactiveChallenge(reward),
});
