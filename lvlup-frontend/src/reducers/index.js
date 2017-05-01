import { combineReducers } from 'redux';
import { loginInfo, studentPointsAndCampus, submissions } from './student-reducer';
import { reducer as formReducer } from 'redux-form';
import { loginInfo, studentPointsAndCampus } from './studentReducer';
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
});

export default lvlupApp;
