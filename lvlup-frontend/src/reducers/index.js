import { combineReducers } from 'redux';
import { loginInfo, studentPointsAndCampus, submissions, challenges } from './student-reducer';
import { reducer as formReducer } from 'redux-form';
import { loggedIn } from './adminLoginReducer';
import { signedUp, allCampuses, allCohorts, setCampus, setCohort } from './adminSignupReducer';

const lvlupApp = combineReducers({
  loginInfo,
  studentPointsAndCampus,
  submissions,
  form: formReducer,
  loggedIn,
  signedUp,
  allCampuses,
  allCohorts,
  setCampus,
  setCohort,
  challenges,
});

export default lvlupApp;
