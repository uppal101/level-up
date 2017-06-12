import axios from 'axios';
import * as CONST from '../constants/constants';

const cohortToAdd = (props) => {
  const url = '/api/cohorts';
  return axios.post(url, props).then(response => response.data);
};

export const addCohort = props => ({
  type: CONST.ADD_COHORT,
  payload: cohortToAdd(props),
});

export const resetAddCohort = () => ({
  type: CONST.RESET_ADD_COHORT,
});

const adminCohortToAdd = (id, props) => {
  const url = `/api/admins/${id}/cohorts`;
  return axios.post(url, props).then(response => response.data);
};

export const adminCohort = (id, props) => ({
  type: CONST.ADMIN_COHORT_ADD,
  payload: adminCohortToAdd(id, props),
});

export const resetAdminCohort = () => ({
  type: CONST.RESET_ADMIN_COHORT_ADD,
});

const adminReset = (id) => {
  const url = `/api/admins/${id}`;
  return axios.get(url).then(response => response.data);
};

export const resetAdmin = id => ({
  type: CONST.RESET_ADMIN,
  payload: adminReset(id),
});
