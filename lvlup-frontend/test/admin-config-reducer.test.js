import { addedCohort, addAdminCohort } from '../src/reducers/admin-config';
import * as CONST from '../src/constants/constants';

describe('add cohort reducer', () => {
  it('should return the initial state when no action is passed in', () => {
    expect(addedCohort(undefined, {})).toEqual({ fulfilled: false });
  });

  it('should return a new state with the added cohort', () => {
    const prevState = { fulfilled: false };
    const nextState = addedCohort(prevState, { type: CONST.ADD_COHORT_FULFILLED, name: 'g100', type: 'WDI', q1_start_date: '2017-06-12', q2_start_date: '2017-07-03', q3_start_date: '2017-08-07', q4_start_date: '2017-09-04', graduation_date: '2017-10-08', campus_id: 1 });
    expect(nextState).toEqual({ fulfilled: true });
  });
});

describe('add  admin cohort reducer', () => {
  it('should return the initial state when no action is passed in', () => {
    expect(addAdminCohort(undefined, {})).toEqual({ fulfilled: false });
  });

  it('should return a new state with the added admin cohort', () => {
    const prevState = { fulfilled: false };
    const nextState = addAdminCohort(prevState, { type: CONST.ADMIN_COHORT_ADD_FULFILLED, name: 'g54' });
    expect(nextState).toEqual({ fulfilled: true });
  });
});
