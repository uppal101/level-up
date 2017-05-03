import { combineReducers } from 'redux';
import { loginInfo, studentPointsAndCampus, submissions, challenges, requests, selectedChallenge, selectedReward, rewards } from './student-reducer';
import { reducer as formReducer } from 'redux-form';
import { loggedIn } from './adminLoginReducer';
import { signedUp, allCampuses, allCohorts, setCampus, setCohort } from './adminSignupReducer';
import { challengeAdded } from './addChallengeReducer';
import { rewardAdded } from './addRewardReducer';
import { adminLoginInfo } from './adminDashboardReducer';

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
