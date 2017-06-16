import { adminSignup, allCampuses, allCohorts } from '../src/reducers/admin-signup-reducer';
import * as CONST from '../src/constants/constants';

describe('admin adminSignup reducer', () => {
  it('should return the initial state', () => {
    expect(adminSignup(undefined, {})).toEqual({ status: false });
  });

  it('should return a new state with the signed up user', () => {
    const prevState = {};
    const nextState = adminSignup(prevState, { type: CONST.ADMIN_SIGNUP_FULFILLED, payload: { test: 1 } });
    expect(nextState).toEqual({ test: 1 });
  });
});

describe('admin allCampuses reducer', () => {
  it('should return the initial state', () => {
    expect(allCampuses(undefined, {})).toEqual([]);
  });

  it('should return a new state with all campuses', () => {
    const prevState = [];
    const nextState = allCampuses(prevState, { type: CONST.ALL_CAMPUSES_FULFILLED, payload: { test: 2 } });
    expect(nextState).toEqual({ test: 2 });
  });
});

describe('admin allCohorts reducer', () => {
  it('should return the initial state', () => {
    expect(allCohorts(undefined, {})).toEqual([]);
  });

  it('should return a new state with all admin cohorts', () => {
    const prevState = [];
    const nextState = allCohorts(prevState, { type: CONST.ALL_COHORTS_FULFILLED, payload: { test: 3 } });
    expect(nextState).toEqual({ test: 3 });
  });
});
