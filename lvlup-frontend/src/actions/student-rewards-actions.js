import axios from 'axios';
import * as CONST from '../constants/constants';

const fetchRewards = campusId => axios(`http://localhost:3000/api/rewards/campuses/${campusId}`).then(response => response.data);

export const campusRewards = campusId => ({
  type: CONST.REWARDS_CAMPUS,
  payload: fetchRewards(campusId),
});
