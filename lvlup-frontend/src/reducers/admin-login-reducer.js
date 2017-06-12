// import initialState from './initialState';
import * as CONST from '../constants/constants';

export const loggedIn = (state = { status: false }, action) => {
  console.log('inside loggedin', action);
  switch (action.type) {
    case CONST.ADMIN_LOGIN_FULFILLED:
      return Object.assign({}, { status: true }, action.payload);
    case CONST.ADMIN_LOGIN_REJECTED:
      return Object.assign({}, { status: false, error: 'Login Failed. Please Check your Email and Password' }, action.payload);
    case CONST.ADMIN_LOGOUT_FULFILLED:
      return Object.assign({}, { status: false });
    case CONST.RESET_ADMIN_FULFILLED:
      console.log('hello!');
      return Object.assign({}, { status: true, updated: true }, action.payload);
    default:
      return state;
  }
};
