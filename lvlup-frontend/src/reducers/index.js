import { combineReducers } from 'redux';
import { loginInfo, studentPointsAndCampus, submissions, challenges, requests, selectedChallenge, selectedReward, requestedReward, rewards, submittedChallenge } from './student-reducer';
import { reducer as formReducer } from 'redux-form';
import { loggedIn } from './admin-login-reducer';
import { signedUp, allCampuses, allCohorts, setCampus, setCohort } from './admin-signup-reducer';
import { addedChallenge } from './add-challenge-reducer';
import { editedReward } from './edit-reward-reducer';
import { editedChallenge, inactiveChallenge } from './edit-challenge-reducer';
import { addedReward } from './add-reward-reducer';
import { adminPendingRequests, adminPendingSubmissions } from './admin-dashboard-reducer';
import { approveSelectedReward, denySelectedReward, inactiveReward } from './request-reducer';


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
  addedChallenge,
  editedReward,
  editedChallenge,
  addedReward,
  selectedChallenge,
  submittedChallenge,
  adminPendingRequests,
  adminPendingSubmissions,
  approveSelectedReward,
  denySelectedReward,
  inactiveReward,
  inactiveChallenge,
});

export default lvlupApp;
