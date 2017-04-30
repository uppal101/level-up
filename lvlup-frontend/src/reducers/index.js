import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loginInfo, studentPointsAndCampus } from './studentReducer';
import { loggedIn } from './adminLoginReducer';
import { signedUp } from './adminSignupReducer';

const lvlupApp = combineReducers({
  loginInfo,
  studentPointsAndCampus,
  form: formReducer,
  loggedIn,
  signedUp,
});

export default lvlupApp;
