import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loginInfo, studentPointsAndCampus, submissions, challenges, requests, selectedChallenge, selectedReward, rewards } from './student-reducer';
import { loggedIn } from './admin-login-reducer';
import { signedUp, allCampuses, allCohorts, setCampus, setCohort } from './admin-signup-reducer';
import { challengeAdded } from './add-challenge-reducer';
import { rewardAdded } from './add-reward-reducer';
import { adminLoginInfo } from './admin-dashboard-reducer';

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
  challengeAdded,
  rewardAdded,
  selectedChallenge,
  adminLoginInfo,

});

export default lvlupApp;
