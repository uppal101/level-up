import { editedReward } from '../src/reducers/edit-reward-reducer';
import * as CONST from '../src/constants/constants';

describe('edit reward reducer', () => {
  it('should return the initial state', () => {
    expect(editedReward(undefined, {})).toEqual({ fulfilled: false });
  });
  it('should return a new state with the edited reward', () => {
    const prevState = { fulfilled: false };
    const nextState = editedReward(prevState, { type: CONST.EDIT_REWARD_FULFILLED, name: 'gSwag', point_cost: 50, description: 'Galvanize hat', campus_id: 1, category_id: 4 });
    expect(nextState).toEqual({ fulfilled: true });
  });
});
