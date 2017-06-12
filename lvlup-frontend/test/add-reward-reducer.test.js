import { addedReward } from '../src/reducers/add-reward-reducer';
import * as CONST from '../src/constants/constants';

describe('add reward reducer', () => {
  it('should return the initial state when no action is passed in', () => {
    expect(addedReward(undefined, {})).toEqual({ fulfilled: false });
  });

  it('should return a new state with the added reward', () => {
    const prevState = { fulfilled: false };
    const nextState = addedReward(prevState, { type: CONST.ADD_REWARD_FULFILLED, name: 'gSwag', point_cost: 50, description: 'Galvanize apparel', campus_id: 1, category_id: 4 });
    expect(nextState).toEqual({ fulfilled: true });
  });
});
