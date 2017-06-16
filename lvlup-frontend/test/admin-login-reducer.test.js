import { adminLoginInfo } from '../src/reducers/admin-login-reducer';
import * as CONST from '../src/constants/constants';

describe('add login reducer', () => {
  it('should return the initial state', () => {
    expect(adminLoginInfo(undefined, {})).toEqual({ status: false });
  });

  it('should return a new state with the logged in user', () => {
    const prevState = { status: false };
    const nextState = adminLoginInfo(prevState, { type: CONST.ADMIN_LOGIN_FULFILLED, email: 'sanjeet.uppal92@gmail.com', password: 'youareawizard' });
    expect(nextState).toEqual({ status: true });
  });

  it('should return a new state with the logged out user', () => {
    const prevState = { status: true };
    const nextState = adminLoginInfo(prevState, { type: CONST.ADMIN_LOGOUT_FULFILLED, email: 'sanjeet.uppal92@gmail.com', password: 'youareawizard' });
    expect(nextState).toEqual({ status: false });
  });
});
