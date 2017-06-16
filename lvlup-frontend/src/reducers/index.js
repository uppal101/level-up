import { combineReducers } from 'redux';
import { studentLoginInfo, studentPointsAndCampus, submissions, challenges, requests, selectedChallenge, selectedReward, requestedReward, rewards, submittedChallenge } from './student-reducer';
import { reducer as formReducer } from 'redux-form';
import { adminLoginInfo } from './admin-login-reducer';
import { adminSignup, allCampuses, allCohorts, recruiterDemo } from './admin-signup-reducer';
import { addedChallenge } from './challenge-reducers';
import { editedReward } from './edit-reward-reducer';
import { editedChallenge, inactiveChallenge } from './edit-challenge-reducer';
import { addedReward } from './reward-reducers';
import { adminPendingRequests, adminPendingSubmissions } from './admin-dashboard-reducer';
import { approveSelectedReward, denySelectedReward, inactiveReward } from './request-reducer';
import { addedCohort, addAdminCohort } from './admin-config';

const lvlupApp = combineReducers({
  studentLoginInfo,
  studentPointsAndCampus,
  submissions,
  requests,
  form: formReducer,
  adminLoginInfo,
  adminSignup,
  allCampuses,
  allCohorts,
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
  recruiterDemo,
  addedCohort,
  addAdminCohort,
});

export default lvlupApp;
