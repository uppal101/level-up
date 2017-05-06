import { loggedIn } from '../src/reducers/admin-login-reducer';

describe('add login reducer', () => {
  it('should return the initial state', () => {
    expect(loggedIn(undefined, {})).toEqual({ status: false });
  });
});
