import * as CONST from '../constants/constants';

export const adminPendingSubmissions = (state = { submissionsAdmin: [] }, action) => {
  switch (action.type) {
    case CONST.ADMIN_SUBMISSIONS_FULFILLED:
      console.log(action.payload);
      return Object.assign({}, state, {
        submissionsAdmin: state.submissionsAdmin.concat(action.payload),
      });
    default:
      return state;
  }
};

export const adminPendingRequests = (state = { requestsAdmin: [] }, action) => {
  switch (action.type) {
    case CONST.ADMIN_REQUESTS_FULFILLED:
      console.log(action.payload);
      return Object.assign({}, state, {
        requestsAdmin: state.requestsAdmin.concat(action.payload),
      });
    default:
      return state;
  }
};
