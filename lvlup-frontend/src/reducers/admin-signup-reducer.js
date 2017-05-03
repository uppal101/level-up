import initialState from './initialState';

export const signedUp = (state = initialState.signedUp, action) => {
  switch (action.type) {
    case 'SIGNUP_PENDING':
      return state;
    case 'SIGNUP_FULFILLED':
      return action.payload;
    case 'SIGNUP_REJECTED':
      return action.payload;
    default:
      return state;
  }
};

export const allCampuses = (state = [], action) => {
  switch (action.type) {
    case 'ALL_CAMPUSES_PENDING':
      return state;
    case 'ALL_CAMPUSES_FULFILLED':
      return action.payload;
    case 'ALL_CAMPUSES_REJECTED':
      return action.payload;
    default:
      return state;
  }
};

export const allCohorts = (state = [], action) => {
  switch (action.type) {
    case 'ALL_COHORTS_PENDING':
      return state;
    case 'ALL_COHORTS_FULFILLED':
      return action.payload;
    case 'ALL_COHORTS_REJECTED':
      return action.payload;
    default:
      return state;
  }
};

export const setCampus = (state = '', action) => {
  switch (action.type) {
    case 'SET_CAMPUSES':
      return action.campus;
    default:
      return state;
  }
};

export const setCohort = (state = '', action) => {
  switch (action.type) {
    case 'SET_COHORT':
      return action.cohort;
    default:
      return state;
  }
};
