import { combineReducers } from 'redux';
import { loginInfo, studentPointsAndCampus } from './studentReducer';

const lvlupApp = combineReducers({
  loginInfo, studentPointsAndCampus,
});

export default lvlupApp;
