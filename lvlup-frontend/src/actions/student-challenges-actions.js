import axios from 'axios';
import * as CONST from '../constants/constants';

const fetchChallenges = campusId => axios(`/api/challenges/campuses/${campusId}`).then(response => response.data);

export const campusChallenges = campusId => ({
  type: CONST.CHALLENGES_CAMPUS,
  payload: fetchChallenges(campusId),
});

export const resetCampusChallenges = campusId => ({
  type: CONST.RESET_AFTER_ADDED_CHALLENGE,
  payload: fetchChallenges(campusId),
});

const challengeSubmissionCall = (props) => {
  const url = '/api/submissions';
  return axios.post(url, props).then(response => response.data);
};

export const challengeSubmission = props => ({
  type: CONST.CHALLENGE_SUBMISSION,
  payload: challengeSubmissionCall(props),
});

export const selectChallenge = challenge => ({
  type: CONST.SELECTED_CHALLENGE,
  challenge,
});

export const resetChallenge = () => ({
  type: CONST.RESET_CHALLENGE,
});
