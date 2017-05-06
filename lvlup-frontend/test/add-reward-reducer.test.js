import { addedReward } from '../src/reducers/add-reward-reducer';
import { addReward } from '../src/actions/add-reward';

describe('add reward reducer', () => {
  it('should return the initial state when no action is passed in', () => {
    expect(addedReward(undefined, {})).toEqual({ status: false });
  });
  // 
  // it('should return the reward that was added', () => {
  //   const props = {
  //     name: 'Parker',
  //     point_cost: 1,
  //     description: 'It is a great reward. He gives you lots of money.',
  //     campus_id: 1,
  //     category_id: 3,
  //   };
  //
  //   expect(addedReward({ status: false }, addReward(props)))
  //     .toEqual({
  //       name: 'Parker',
  //       point_cost: 1,
  //       description: 'It is a great reward. He gives you lots of money.',
  //       campus_id: 1,
  //       category_id: 3,
  //     });
  });
});
