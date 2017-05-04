import axios from 'axios';

const postEditedChallenge = (props) => {
  const url = `/api/challenges/${props.challenge_id}`;
  return axios.put(url, props);
};

export const editChallenge = props => ({
  type: CONST_EDIT_CHALLENGE,
  payload: postEditedChallenge(props),
});

export const resetEditChallenge = () => ({
  type: CONST.RESET_EDIT_CHALLENGE,
});
