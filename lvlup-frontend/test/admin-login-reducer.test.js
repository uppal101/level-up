import { loggedIn } from '../src/reducers/admin-login-reducer';
import * as CONST from '../src/constants/constants';

describe('add login reducer', () => {
  it('should return the initial state', () => {
    expect(loggedIn(undefined, {})).toEqual({ status: false });
  });

  it('should return a new state with the logged in user', () => {
    const prevState = { status: false };
    const nextState = loggedIn(prevState, { type: CONST.ADMIN_LOGIN_FULFILLED, email: 'sanjeet.uppal92@gmail.com', password: 'youareawizard' });
    expect(nextState).toEqual({ status: true });
  });
});
