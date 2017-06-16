import * as actions from '../../src/actions/student-challenges-actions';
import * as types from '../../src/constants/constants';

describe('student challenges actions', () => {
  it('should create an action reset challenge', () => {
    const expectedAction = {
      type: types.RESET_CHALLENGE,
    };
    expect(actions.resetChallenge()).toEqual(expectedAction);
  });

  it('should create an action select challenge', () => {
    const challenge = { test: 1 };
    const expectedAction = {
      type: types.SELECTED_CHALLENGE,
      challenge,
    };
    expect(actions.selectChallenge(challenge)).toEqual(expectedAction);
  });
});
