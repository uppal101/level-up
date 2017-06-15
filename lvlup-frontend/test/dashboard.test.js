import * as helpers from '../src/helpers/dashboard';

describe('quarter converter', () => {
  it('should return quarter', () => {
    expect(helpers.quarterConverter('q1')).toEqual('Quarter 1');
  });
  it('should return quarter', () => {
    expect(helpers.quarterConverter('q2')).toEqual('Quarter 2');
  });
  it('should return quarter', () => {
    expect(helpers.quarterConverter('q3')).toEqual('Quarter 3');
  });
  it('should return quarter', () => {
    expect(helpers.quarterConverter('q4')).toEqual('Quarter 4');
  });
  it('should return graduated', () => {
    expect(helpers.quarterConverter('grad')).toEqual('Graduated');
  });
});

describe('quarter point finder', () => {
  it('should return points earned in the quarter', () => {
    expect(helpers.quarterPointFinder('q1')).toEqual(165);
  });
});
