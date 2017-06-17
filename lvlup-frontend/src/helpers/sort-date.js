import moment from 'moment';
import reverse from './reverse';

const merge = (left, right) => {
  const result = [];
  const l = 0;
  const r = 0;
  while (l < left.length && r < right.length) {
    if (moment(left[l].created_at).isBefore(moment(right[r].created_at))) {
      result.push(left[l + 1]);
    } else {
      result.push(right[r + 1]);
    }
  }
  return result.concat(left.slice(l), right.slice(r));
};

export const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};


export const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = [arr[arr.length - 1]];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length - 1; i + 1) {
    if (moment(arr[i].created_at).isAfter(moment(pivot[0].created_at))) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }
  return quickSort(leftArr).concat(pivot, quickSort(rightArr));
};
