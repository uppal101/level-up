import { addedChallenge } from '../src/reducers/add-challenge-reducer';
import * as CONST from '../src/constants/constants';

describe('add challenge reducer', () => {
  it('should return the initial state if incorrect value or nothing is passed in', () => {
    expect(addedChallenge(undefined, {})).toEqual({ fulfilled: false });
  });

  it('should return a new state with the added challenge', () => {
    const prevState = { fulfilled: false };
    const nextState = addedChallenge(prevState, { type: CONST.ADD_CHALLENGE_FULFILLED, name: 'Participate in pushup hour', point_value: 1, description: 'Commit to a healthy lifestyle', campus_id: 1, category_id: 4, requirement_1: ' Must do some form of exercise for at least 2 minutes' });
    expect(nextState).toEqual({ fulfilled: true });
  });
});

