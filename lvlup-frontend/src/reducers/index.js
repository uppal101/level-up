import { combineReducers } from 'redux';
import { loginInfo, loggedIn } from './studentReducer';

const lvlupApp = combineReducers({
  loginInfo, loggedIn,
});

export default lvlupApp;
