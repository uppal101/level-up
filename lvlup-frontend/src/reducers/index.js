import { combineReducers } from 'redux';
import { loginInfo, logedInOauth } from './studentReducer';

const lvlupApp = combineReducers({
  loginInfo, logedInOauth,
});

export default lvlupApp;
