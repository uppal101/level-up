import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { studentLoginInfo, studentPointsAndCampus } from './student-reducer';
import { allCampuses, allCohorts, recruiterDemo } from './general-reducers';
import { addedChallenge, challenges, editedChallenge, inactiveChallenge, selectedChallenge, submissions, submittedChallenge } from './challenge-reducers';
import { addedReward, approveSelectedReward, denySelectedReward, editedReward, inactiveReward, requestedReward, rewards, requests, selectedReward } from './reward-reducers';
import { addedCohort, addAdminCohort, adminPendingRequests, adminPendingSubmissions, adminSignup, adminLoginInfo } from './admin-reducers';

const lvlupApp = combineReducers({
  addedChallenge,
  addedReward,
  addedCohort,
  addAdminCohort,
  adminLoginInfo,
  adminSignup,
  adminPendingRequests,
  adminPendingSubmissions,
  allCampuses,
  allCohorts,
  approveSelectedReward,
  challenges,
  denySelectedReward,
  editedReward,
  editedChallenge,
  form: formReducer,
  inactiveReward,
  inactiveChallenge,
  recruiterDemo,
  requestedReward,
  requests,
  rewards,
  selectedReward,
  selectedChallenge,
  studentLoginInfo,
  studentPointsAndCampus,
  submissions,
  submittedChallenge,
});

export default lvlupApp;
