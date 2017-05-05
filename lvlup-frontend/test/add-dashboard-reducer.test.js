import reducer from '../src/reducers/admin-dashboard-reducer';

describe('admin pending submissions reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
});
