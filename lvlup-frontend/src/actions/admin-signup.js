import axios from 'axios';
import * as CONST from '../constants/constants';

const signupRequest = (props) => {
  const url = '/api/admin/signup';
  return axios.post(url, props).then(response => response.data);
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
  type: CONST.ADMIN_SIGNUP,
  payload: signupRequest(props),
});

export const allCampuses = () => ({
  type: CONST.ALL_CAMPUSES,
  payload: getCampuses(),
});

export const allCohorts = () => ({
  type: CONST.ALL_COHORTS,
  payload: getCohorts(),
});

export const setCampuses = campus => ({
  type: CONST.SET_CAMPUSES,
  campus,

});

export const setCohorts = cohort => ({
  type: CONST.SET_COHORT,
  cohort,
});
