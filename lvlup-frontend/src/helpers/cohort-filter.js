function cohortsFilter(listA, listB) {
  const temp = [];
  for (let i = 0; i < listA.length; i++) {
    let there = false;
    for (let j = 0; j < listB.length; j++) {
      if (listA[i].id === listB[j].id) {
        there = true;
      }
    }
    if (!there) {
      temp.push(listA[i]);
    }
  }
  return temp;
}

export default cohortsFilter;
