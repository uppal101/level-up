import axios from 'axios';

const signupRequest = (props) => {
  const url = '/api/admin/signup';
  return axios.post(url, props);
};

const getCampuses = () => {
  const url = '/api/campuses/';
  return axios.get(url).then(response => response.data);
};

const getCohorts = () => {
  const url = '/api/cohorts/';
  return axios.get(url).then(response => response.data);
};

export const signup = props => ({
  type: 'SIGNUP',
  payload: signupRequest(props),
});

export const allCampuses = () => ({
  type: 'ALL_CAMPUSES',
  payload: getCampuses(),
});

export const allCohorts = () => ({
  type: 'ALL_COHORTS',
  payload: getCohorts(),
});

export const setCampuses = campus => ({
  type: 'SET_CAMPUSES',
  campus,

});

export const setCohorts = cohort => ({
  type: 'SET_COHORT',
  cohort,
});
