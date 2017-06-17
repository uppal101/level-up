const swap = (arr, idx1, idx2) => {
  const temp1 = arr[idx1];
  const temp2 = arr[idx2];
  arr[idx1] = temp2;
  arr[idx2] = temp1;
  return arr;
};

export const bubbleSortStudent = (arr) => {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1].student.name > arr[i].student.name) {
        done = false;
        swap(arr, i - 1, i);
      }
    }
  }
  return arr;
};

export const selectionSort = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j][key] < arr[min][key]) {
        min = j;
      }
    }
    swap(arr, i, min);
  }
  return arr;
};


export const insertionSortPointsChal = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let key = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[key].challenge.point_value < arr[j].challenge.point_value) {
        swap(arr, key, j);
        key--;
      }
    }
  }
  return arr;
};

export const insertionSortPointsReward = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let key = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[key].reward.point_cost < arr[j].reward.point_cost) {
        swap(arr, key, j);
        key--;
      }
    }
  }
  return arr;
};
