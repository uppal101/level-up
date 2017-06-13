import { signedUp, allCampuses, allCohorts, setCampus, setCohort } from '../src/reducers/admin-signup-reducer';
import * as CONST from '../src/constants/constants';

describe('admin signedUp reducer', () => {
  it('should return the initial state', () => {
    expect(signedUp(undefined, {})).toEqual({ status: false });
  });
  // it('should return a new state with the signed up user', () => {
  //   const prevState = { status: false };
  //   const nextState = signedUp(prevState, { type: CONST.ADMIN_SIGNUP_FULFILLED, username: 'uppal101', name: 'Sanjeet Uppal', email: 'sanjeet.uppal92@gmail.com', campus_id: 1, password: 'youareawizard' });
  //   expect(nextState).toEqual({ status: true });
  // });
});

describe('admin allCampuses reducer', () => {
  it('should return the initial state', () => {
    expect(allCampuses(undefined, {})).toEqual([]);
  });
});

describe('admin allCohorts reducer', () => {
  it('should return the initial state', () => {
    expect(allCohorts(undefined, {})).toEqual([]);
  });
});

describe('admin setCampus reducer', () => {
  it('should return the initial state', () => {
    expect(setCampus(undefined, {})).toEqual('');
  });
});

describe('admin setCohort reducer', () => {
  it('should return the initial state', () => {
    expect(setCohort(undefined, {})).toEqual('');
  });
});
