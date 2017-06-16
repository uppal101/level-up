import moment from 'moment';

const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

const merge = (left, right) => {
  const result = [];
  let l = 0;
  let r = 0;
  while (l < left.length && r < right.length) {
    if (moment(left[l].created_at).isBefore(moment(right[r].created_at))) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  return result.concat(left.slice(l), right.slice(r));
};

export const mergeSort = (arr) => {
  console.log(arr);
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

export const quickSort = (arr) => {
  console.log(arr);
  if (arr.length <= 1) return arr;
  const pivot = [arr[arr.length - 1]];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (moment(arr[i].created_at).isAfter(moment(pivot[0].created_at))) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }
  return quickSort(leftArr).concat(pivot, quickSort(rightArr));
};
