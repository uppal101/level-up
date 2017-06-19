import * as actions from '../../src/actions/sort-date-actions';
import * as types from '../../src/constants/constants';

describe('sort date actions', () => {
  it('should create an action sort submitted chronologically', () => {
    const expectedAction = {
      type: types.SORT_SUBMITTED_CHRONO,
    };
    expect(actions.sortSubmittedChrono()).toEqual(expectedAction);
  });

  it('should create an action sort submitted reverse chronologically', () => {
    const expectedAction = {
      type: types.SORT_SUBMITTED_REV_CHRONO,
    };
    expect(actions.sortSubmittedRevChrono()).toEqual(expectedAction);
  });

  it('should create an action sort requests chronologically', () => {
    const expectedAction = {
      type: types.SORT_REQUESTS_CHRONO,
    };
    expect(actions.sortRequestsChrono()).toEqual(expectedAction);
  });

  it('should create an action sort reverse requests chronologically', () => {
    const expectedAction = {
      type: types.SORT_REQUESTS_REV_CHRONO,
    };
    expect(actions.sortRequestsRevChrono()).toEqual(expectedAction);
  });

  it('should create an action sort submissions chronologically', () => {
    const expectedAction = {
      type: types.SORT_SUBMISSIONS_CHRONO,
    };
    expect(actions.sortSubmissionsChrono()).toEqual(expectedAction);
  });

  it('should create an action sort reverse submissions chronologically', () => {
    const expectedAction = {
      type: types.SORT_SUBMISSIONS_REV_CHRONO,
    };
    expect(actions.sortSubmissionsRevChrono()).toEqual(expectedAction);
  });

  it('should create an action sort rewards chronologically', () => {
    const expectedAction = {
      type: types.SORT_REWARDS_CHRONO,
    };
    expect(actions.sortRewardsChrono()).toEqual(expectedAction);
  });

  it('should create an action sort reverse rewards chronologically', () => {
    const expectedAction = {
      type: types.SORT_REWARDS_REV_CHRONO,
    };
    expect(actions.sortRewardsRevChrono()).toEqual(expectedAction);
  });
});
