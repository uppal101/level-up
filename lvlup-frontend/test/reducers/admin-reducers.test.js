import { adminSignup, addedCohort, addAdminCohort, adminPendingSubmissions, adminPendingRequests, adminLoginInfo, allCampuses, allCohorts } from '../../src/reducers/admin-reducers';
import * as CONST from '../../src/constants/constants';

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

describe('admin pending submissions reducer', () => {
  it('should return the initial state', () => {
    expect(adminPendingSubmissions(undefined, {})).toEqual({ submissionsAdmin: [] });
  });
});

describe('admin pending requests reducer', () => {
  it('should return the initial state', () => {
    expect(adminPendingRequests(undefined, {})).toEqual({ requestsAdmin: [] });
  });
});

describe('add cohort reducer', () => {
  it('should return the initial state when no action is passed in', () => {
    expect(addedCohort(undefined, {})).toEqual({ fulfilled: false });
  });

  it('should return a new state with the added cohort', () => {
    const prevState = { fulfilled: false };
    const nextState = addedCohort(prevState, { type: CONST.ADD_COHORT_FULFILLED, name: 'g100', type: 'WDI', q1_start_date: '2017-06-12', q2_start_date: '2017-07-03', q3_start_date: '2017-08-07', q4_start_date: '2017-09-04', graduation_date: '2017-10-08', campus_id: 1 });
    expect(nextState).toEqual({ fulfilled: true });
  });
});

describe('add  admin cohort reducer', () => {
  it('should return the initial state when no action is passed in', () => {
    expect(addAdminCohort(undefined, {})).toEqual({ fulfilled: false });
  });

  it('should return a new state with the added admin cohort', () => {
    const prevState = { fulfilled: false };
    const nextState = addAdminCohort(prevState, { type: CONST.ADMIN_COHORT_ADD_FULFILLED, name: 'g54' });
    expect(nextState).toEqual({ fulfilled: true });
  });
});

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
