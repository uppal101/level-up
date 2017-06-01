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
