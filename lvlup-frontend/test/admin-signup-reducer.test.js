import { signedUp, allCampuses, allCohorts, setCampus, setCohort } from '../src/reducers/admin-signup-reducer';
import * as CONST from '../src/constants/constants';

describe('admin signedUp reducer', () => {
  it('should return the initial state', () => {
    expect(signedUp(undefined, {})).toEqual({ status: false });
  });

  it('should return a new state with the signed up user', () => {
    const prevState = {};
    const nextState = signedUp(prevState, { type: CONST.ADMIN_SIGNUP_FULFILLED, payload: { test: 1 } });
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

describe('admin setCampus reducer', () => {
  it('should return the initial state', () => {
    expect(setCampus(undefined, {})).toEqual('');
  });

  it('should return a new state with admin campus', () => {
    const prevState = '';
    const nextState = setCampus(prevState, { type: CONST.SET_CAMPUSES, campus: { test: 4 } });
    expect(nextState).toEqual({ test: 4 });
  });
});

describe('admin setCohort reducer', () => {
  it('should return the initial state', () => {
    expect(setCohort(undefined, {})).toEqual('');
  });

  it('should return a new state with all admin cohorts', () => {
    const prevState = '';
    const nextState = setCohort(prevState, { type: CONST.SET_COHORT, cohort: { test: 5 } });
    expect(nextState).toEqual({ test: 5 });
  });
});
