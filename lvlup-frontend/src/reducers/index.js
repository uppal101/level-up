import { combineReducers } from 'redux';
import { loginInfo, studentPointsAndCampus, submissions, challenges, requests, selectedChallenge, selectedReward, requestedReward, rewards, submissionChallenge } from './student-reducer';
import { reducer as formReducer } from 'redux-form';
import { loggedIn } from './admin-login-reducer';
import { signedUp, allCampuses, allCohorts, setCampus, setCohort } from './admin-signup-reducer';
import { challengeAdded } from './add-challenge-reducer';
import { rewardAdded } from './add-reward-reducer';

const lvlupApp = combineReducers({
  loginInfo,
  studentPointsAndCampus,
  submissions,
  requests,
  form: formReducer,
  loggedIn,
  signedUp,
  allCampuses,
  allCohorts,
  setCampus,
  setCohort,
  challenges,
  rewards,
  selectedReward,
  requestedReward,
  challengeAdded,
  rewardAdded,
  selectedChallenge,
  submissionChallenge,
});

export default lvlupApp;
