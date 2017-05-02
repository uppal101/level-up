import axios from 'axios';
import * as CONST from '../constants/constants';

const fetchChallenges = campusId => axios(`http://localhost:3000/api/challenges/campuses/${campusId}`).then(response => response.data);

export const campusChallenges = campusId => ({
  type: CONST.CHALLNGES_CAMPUS,
  payload: fetchChallenges(campusId),
});
