import { adminSignup, addedCohort, addAdminCohort, adminPendingSubmissions, adminPendingRequests, adminLoginInfo } from '../../src/reducers/admin-reducers';
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

  it('should return state when request is pending', () => {
    const prevState = {};
    const nextState = adminSignup(prevState, { type: CONST.ADMIN_SIGNUP_PENDING, payload: { test: 1 } });
    expect(nextState).toEqual({});
  });

  it('should return old state when sent incorrect input for added cohort', () => {
    const prevState = { status: false };
    const nextState = adminSignup(prevState, { type: CONST.ADMIN_SIGNUP_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ error: 'Please check that you have filled out all the required fields', status: false});
  });
});

describe('admin pending submissions reducer', () => {
  it('should return the initial state', () => {
    expect(adminPendingSubmissions(undefined, {})).toEqual({ submissionsAdmin: [] });
  });

  it('should return a new state with the admin pending submissions', () => {
    const prevState = { submissionsAdmin: [] };
    const nextState = adminPendingSubmissions(prevState, { type: CONST.ADMIN_SUBMISSIONS_FULFILLED, payload: [{ test: 1 }] });

    expect(nextState).toEqual({ submissionsAdmin: [{ test: 1 }] });
  });

  it('should return a new state with the reset admin pending submissions', () => {
    const prevState = { submissionsAdmin: [{ test: 1 }] };
    const nextState = adminPendingSubmissions(prevState, { type: CONST.RESET_PENDING_SUBMISSIONS });

    expect(nextState).toEqual({ submissionsAdmin: [] });
  });

  it('should return old state when sent incorrect input for pending submissions', () => {
    const prevState = { submissionsAdmin: [] };
    const nextState = adminPendingSubmissions(prevState, { type: CONST.ADMIN_SUBMISSIONS_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ error: 'Server Error - Please Try Again', submissionsAdmin: [] });
  });
});

describe('admin pending requests reducer', () => {
  it('should return the initial state', () => {
    expect(adminPendingRequests(undefined, {})).toEqual({ requestsAdmin: [] });
  });

  it('should return a new state with the admin pending requests', () => {
    const prevState = { requestsAdmin: [] };
    const nextState = adminPendingRequests(prevState, { type: CONST.ADMIN_REQUESTS_FULFILLED, payload: [{ test: 2 }] });

    expect(nextState).toEqual({ requestsAdmin: [{ test: 2 }] });
  });

  it('should return a new state with the reset admin pending requests', () => {
    const prevState = { requestsAdmin: [{ test: 2 }] };
    const nextState = adminPendingRequests(prevState, { type: CONST.RESET_PENDING_REWARDS });

    expect(nextState).toEqual({ requestsAdmin: [] });
  });

  it('should return old state when sent incorrect input for pending requests', () => {
    const prevState = { requestsAdmin: [] };
    const nextState = adminPendingRequests(prevState, { type: CONST.ADMIN_REQUESTS_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ error: 'Server Error - Please Try Again', requestsAdmin: [] });
  });
});

describe('add cohort reducer', () => {
  it('should return the initial state when no action is passed in', () => {
    expect(addedCohort(undefined, {})).toEqual({ fulfilled: false });
  });

  it('should return a new state with the added cohort', () => {
    const prevState = { fulfilled: false };
    const nextState = addedCohort(prevState, { type: CONST.ADD_COHORT_FULFILLED, test: 1 });
    expect(nextState).toEqual({ fulfilled: true });
  });

  it('should return a new state with reset added cohort', () => {
    const prevState = { fulfilled: true };
    const nextState = addedCohort(prevState, { type: CONST.RESET_ADD_COHORT });
    expect(nextState).toEqual({ fulfilled: false });
  });

  it('should return old state when sent incorrect input for added cohort', () => {
    const prevState = { fulfilled: false };
    const nextState = addedCohort(prevState, { type: CONST.ADD_COHORT_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ error: 'Server Error - Please Try Again', fulfilled: false });
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

  it('should return a new state with reset added admin cohort', () => {
    const prevState = { fulfilled: true };
    const nextState = addAdminCohort(prevState, { type: CONST.RESET_ADMIN_COHORT_ADD });
    expect(nextState).toEqual({ fulfilled: false });
  });

  it('should return old state when sent incorrect input for added admin cohort', () => {
    const prevState = { fulfilled: false };
    const nextState = addAdminCohort(prevState, { type: CONST.ADMIN_COHORT_ADD_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ error: 'Server Error - Please Try Again', fulfilled: false });
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

  it('should return a new state with the logged out user', () => {
    const prevState = { status: false };
    const nextState = adminLoginInfo(prevState, { type: CONST.RESET_ADMIN_FULFILLED, email: 'sanjeet.uppal92@gmail.com', password: 'youareawizard' });
    expect(nextState).toEqual({ status: true, updated: true});
  });

  it('should return old state when sent incorrect input for admin login', () => {
    const prevState = { status: false };
    const nextState = adminLoginInfo(prevState, { type: CONST.ADMIN_LOGIN_REJECTED, reject : [test: 1]});
    expect(nextState).toEqual({ error: 'Login Failed. Please Check your Email and Password', status: false });
  });
});
