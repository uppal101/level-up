import { combineReducers } from 'redux';
import { loginInfo, studentPointsAndCampus, submissions, challenges, requests, selectedChallenge, selectedReward, requestedReward, rewards, submissionChallenge } from './student-reducer';
import { reducer as formReducer } from 'redux-form';
import { loggedIn } from './admin-login-reducer';
import { signedUp, allCampuses, allCohorts, setCampus, setCohort } from './admin-signup-reducer';
import { challengeAdded } from './add-challenge-reducer';
import { editedReward } from './edit-reward-reducer';
import { challengeEdited } from './edit-challenge-reducer';
import { rewardAdded } from './add-reward-reducer';
import { adminPendingRequests, adminPendingSubmissions } from './admin-dashboard-reducer';

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
  editedReward,
  challengeEdited,
  rewardAdded,
  selectedChallenge,
  submissionChallenge,
  adminPendingRequests,
  adminPendingSubmissions,
});

export default lvlupApp;
