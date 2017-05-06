import { adminPendingRequests } from '../src/reducers/admin-dashboard-reducer';
import { adminPendingSubmissions } from '../src/reducers/admin-dashboard-reducer';

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
