import cohortsFilter from '../src/helpers/cohort-filter';

describe('cohorts filter', () => {
  it('should filter cohorts', () => {
    const listA = [{ id: 1 }, { id: 2 }];
    const listB = [{ id: 1 }];
    expect(cohortsFilter(listA, listB)).toEqual([{ id: 2 }]);
  });

  it('should filter cohorts', () => {
    const listA = [{ id: 1 }];
    const listB = [{ id: 1 }];
    expect(cohortsFilter(listA, listB)).toEqual([]);
  });
});
