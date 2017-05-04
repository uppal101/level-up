import axios from 'axios';

const postEditedChallenge = (props) => {
  const url = `/api/challenges/${props.challenge_id}`;
  return axios.put(url, props);
};

export const editChallenge = props => ({
  type: 'EDIT_CHALLENGE',
  payload: postEditedChallenge(props),
});
