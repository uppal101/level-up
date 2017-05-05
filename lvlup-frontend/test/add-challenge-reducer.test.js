import reducer from '../src/reducers/add-challenge-reducer';

describe('add challenge reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ fulfilled: false });
  });
});
