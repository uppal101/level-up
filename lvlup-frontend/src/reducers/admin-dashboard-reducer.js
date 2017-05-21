import * as CONST from '../constants/constants';

export const adminPendingSubmissions = (state = { submissionsAdmin: [] }, action) => {
  switch (action.type) {
    case CONST.ADMIN_SUBMISSIONS_FULFILLED:
      return Object.assign({}, state, {
        submissionsAdmin: state.submissionsAdmin.concat(action.payload),
      });
    case CONST.ADMIN_SUBMISSIONS_REJECTED:
      return Object.assign({}, state, { error: 'Server Error - Please Try Again' });
    case CONST.RESET_PENDING_SUBMISSIONS:
      return Object.assign({}, { submissionsAdmin: [] });
    default:
      return state;
  }
};

export const adminPendingRequests = (state = { requestsAdmin: [] }, action) => {
  switch (action.type) {
    case CONST.ADMIN_REQUESTS_FULFILLED:
      return Object.assign({}, state, {
        requestsAdmin: state.requestsAdmin.concat(action.payload),
      });
    case CONST.ADMIN_REQUESTS_REJECTED:
      return Object.assign({}, state, { error: 'Server Error - Please Try Again' });
    case CONST.RESET_PENDING_REWARDS:
      return Object.assign({}, { requestsAdmin: [] });
    default:
      return state;
  }
};
