import { adminPendingSubmissions, adminPendingRequests } from '../src/reducers/admin-dashboard-reducer';
import * as CONST from '../src/constants/constants';

describe('admin pending submissions reducer', () => {
  it('should return the initial state when no action is passed in', () => {
    expect(adminPendingSubmissions(undefined, {})).toEqual({ submissionsAdmin: [] });
  });

  // it('should return a new state with all pending submission', () => {
  //   const prevState = { submissionsAdmin: [] };
  //   const nextState = adminPendingSubmissions(prevState, { type: CONST.ADMIN_SUBMISSIONS_FULFILLED, name: 'Ghiradelli trip', point_value: 50, description: 'Indulge your sweet tooth', campus_id: 1, category_id: 4 });
  //   expect(nextState).toEqual({ submissionsAdmin: [] });
  // });
});

describe('admin pending requests reducer', () => {
  it('should return the initial state when no action is passed in', () => {
    expect(adminPendingRequests(undefined, {})).toEqual({ requestsAdmin: [] });
  });

  // it('should return a new state with all pending submission', () => {
  //   const prevState = { requestsAdmin: [] };
  //   const nextState = adminPendingRequests(prevState, { type: CONST.ADMIN_REQUESTS_FULFILLED, name: 'Ghiradelli trip', point_value: 50, description: 'Indulge your sweet tooth', campus_id: 1, category_id: 4 });
  //   expect(nextState).toEqual({ requestsAdmin: [] });
  // });
});
