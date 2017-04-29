import { combineReducers } from 'redux';
import { loginInfo, studentPointsAndCampus } from './studentReducer';
import { reducer as formReducer } from 'redux-form';

const lvlupApp = combineReducers({
  loginInfo,
  studentPointsAndCampus,
  form: formReducer,
});

export default lvlupApp;
