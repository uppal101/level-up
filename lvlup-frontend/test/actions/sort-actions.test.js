import * as actions from '../../src/actions/sort-actions';
import * as types from '../../src/constants/constants';

describe('sort actions', () => {
  it('should create an action sort challenge name', () => {
    const expectedAction = {
      type: types.SORT_CHALLENGE_TITLE,
    };
    expect(actions.sortChallengeName()).toEqual(expectedAction);
  });

  it('should create an action sort challenge category', () => {
    const expectedAction = {
      type: types.SORT_CHALLENGE_CATEGORY,
    };
    expect(actions.sortChallengeCategory()).toEqual(expectedAction);
  });

  it('should create an action sort challenge points', () => {
    const expectedAction = {
      type: types.SORT_CHALLENGE_POINTS,
    };
    expect(actions.sortChallengePoints()).toEqual(expectedAction);
  });

  it('should create an action sort reward name', () => {
    const expectedAction = {
      type: types.SORT_REWARD_TITLE,
    };
    expect(actions.sortRewardName()).toEqual(expectedAction);
  });

  it('should create an action sort reward category', () => {
    const expectedAction = {
      type: types.SORT_REWARD_CATEGORY,
    };
    expect(actions.sortRewardCategory()).toEqual(expectedAction);
  });

  it('should create an action sort reward points', () => {
    const expectedAction = {
      type: types.SORT_REWARD_POINTS,
    };
    expect(actions.sortRewardPoints()).toEqual(expectedAction);
  });

  it('should create an action sort challenge name reverse', () => {
    const expectedAction = {
      type: types.SORT_CHALLENGE_TITLE_REVERSE,
    };
    expect(actions.sortChallengeNameReverse()).toEqual(expectedAction);
  });

  it('should create an action sort challenge category reverse', () => {
    const expectedAction = {
      type: types.SORT_CHALLENGE_CATEGORY_REVERSE,
    };
    expect(actions.sortChallengeCategoryReverse()).toEqual(expectedAction);
  });

  it('should create an action sort challenge points reverse', () => {
    const expectedAction = {
      type: types.SORT_CHALLENGE_POINTS_REVERSE,
    };
    expect(actions.sortChallengePointsReverse()).toEqual(expectedAction);
  });

  it('should create an action sort reward name reverse', () => {
    const expectedAction = {
      type: types.SORT_REWARD_TITLE_REVERSE,
    };
    expect(actions.sortRewardNameReverse()).toEqual(expectedAction);
  });

  it('should create an action sort reward category reverse', () => {
    const expectedAction = {
      type: types.SORT_REWARD_CATEGORY_REVERSE,
    };
    expect(actions.sortRewardCategoryReverse()).toEqual(expectedAction);
  });

  it('should create an action sort reward points reverse', () => {
    const expectedAction = {
      type: types.SORT_REWARD_POINTS_REVERSE,
    };
    expect(actions.sortRewardPointsReverse()).toEqual(expectedAction);
  });
});
