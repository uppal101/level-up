import { combineReducers } from 'redux';
import { loginInfo } from './studentReducer';

const lvlupApp = combineReducers({
  loginInfo,
});

export default lvlupApp;
