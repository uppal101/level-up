import { combineReducers } from 'redux';
import { loginInfo, studentPointsAndCampus, submissions, challenges, requests, selectedChallenge, selectedReward } from './student-reducer';
import { reducer as formReducer } from 'redux-form';
import { loggedIn } from './adminLoginReducer';
import { signedUp, allCampuses, allCohorts, setCampus, setCohort } from './adminSignupReducer';
import { challengeAdded } from './addChallengeReducer.js';
import { rewardAdded } from './addRewardReducer.js';

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
  // rewards,
  selectedReward,
  challengeAdded,
  rewardAdded,
  selectedChallenge,

});

export default lvlupApp;
