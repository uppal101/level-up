import * as actions from '../src/actions/admin-signup';
import * as types from '../src/constants/constants';

describe('admin signup actions', () => {
  it('should create an action set add campuses', () => {
    const campus = 'Los Angeles';
    const expectedAction = {
      type: types.SET_CAMPUSES,
      campus,
    };
    console.log(actions.setCampuses());
    expect(actions.setCampuses()).toEqual(expectedAction);
  });
});
