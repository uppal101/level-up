import * as actions from '../../src/actions/admin-config';
import * as types from '../../src/constants/constants';

describe('admin config actions', () => {
  it('should create an action reset add cohort', () => {
    const expectedAction = {
      type: types.RESET_ADD_COHORT,
    };
    expect(actions.resetAddCohort()).toEqual(expectedAction);
  });

  it('should create an action reset admincohort', () => {
    const expectedAction = {
      type: types.RESET_ADMIN_COHORT_ADD,
    };
    expect(actions.resetAdminCohort()).toEqual(expectedAction);
  });
});
