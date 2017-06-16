const swap = (arr, idx1, idx2) => {
  const temp1 = arr[idx1];
  const temp2 = arr[idx2];
  arr[idx1] = temp2;
  arr[idx2] = temp1;
  return arr;
};

export const bubbleSortStudentName = (arr) => {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        swap(arr, i - 1, i);
      }
    }
  }
  return arr;
};

export const selectionSortChallengeRewardName = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].name < arr[min].name) {
        min = j;
      }
    }
    swap(arr, i, min);
  }
  return arr;
};

export const selectionSortChallengeRewardNameReverse = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let max = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].name > arr[max].name) {
        max = j;
      }
    }
    swap(arr, i, max);
  }
  return arr;
};

export const selectionSortChallengeRewardCatagory = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].category_id < arr[min].category_id) {
        min = j;
      }
    }
    swap(arr, i, min);
  }
  return arr;
};

export const selectionSortChallengeRewardCatagoryReverse = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let max = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].category_id > arr[max].category_id) {
        max = j;
      }
    }
    swap(arr, i, max);
  }
  return arr;
};

export const selectionSortChallengeRewardPoints = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].point_value < arr[min].point_value) {
        min = j;
      }
    }
    swap(arr, i, min);
  }
  return arr;
};

export const selectionSortChallengeRewardPointsReverse = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let max = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].point_value > arr[max].point_value) {
        max = j;
      }
    }
    swap(arr, i, max);
  }
  return arr;
};

export const insertionSortPoints = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let key = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[key] < arr[j]) {
        swap(arr, key, j);
        key--;
      }
    }
  }
  return arr;
};
