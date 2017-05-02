import { combineReducers } from 'redux';
<<<<<<< HEAD
import { loginInfo, studentPointsAndCampus, submissions, challenges } from './student-reducer';
=======
import { loginInfo, studentPointsAndCampus, submissions, requests } from './student-reducer';
>>>>>>> d778d23295c8c097d3cbd64d961387c70a5050a9
import { reducer as formReducer } from 'redux-form';
import { loggedIn } from './adminLoginReducer';
import { signedUp, allCampuses, allCohorts, setCampus, setCohort } from './adminSignupReducer';
import { challengeAdded } from './addChallengeReducer.js';

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
<<<<<<< HEAD
  challenges,
=======
  challengeAdded,
>>>>>>> d778d23295c8c097d3cbd64d961387c70a5050a9
});

export default lvlupApp;
