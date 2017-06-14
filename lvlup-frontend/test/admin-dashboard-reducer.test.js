import { adminPendingSubmissions, adminPendingRequests } from '../src/reducers/admin-dashboard-reducer';
import * as CONST from '../src/constants/constants';

describe('admin pending submissions reducer', () => {
  it('should return the initial state when no action is passed in', () => {
    expect(adminPendingSubmissions(undefined, {})).toEqual({ submissionsAdmin: [] });
  });

  it('should return a new state with the all pending submissions', () => {
    const prevState = { submissionsAdmin: [] };
    const nextState = adminPendingSubmissions(prevState, { type: CONST.ADMIN_SUBMISSIONS_FULFILLED, payload: [{ test: 1 }] });
    expect(nextState).toEqual({ submissionsAdmin: [{ test: 1 }] });
  });
});

describe('admin pending requests reducer', () => {
  it('should return the initial state when no action is passed in', () => {
    expect(adminPendingRequests(undefined, {})).toEqual({ requestsAdmin: [] });
  });

  it('should return a new state with the all pending requests', () => {
    const prevState = { requestsAdmin: [] };
    const nextState = adminPendingRequests(prevState, { type: CONST.ADMIN_REQUESTS_FULFILLED, payload: [{ test: 2 }] });
    expect(nextState).toEqual({ requestsAdmin: [{ test: 2 }] });
  });
});
