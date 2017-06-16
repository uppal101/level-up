import moment from 'moment';

const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

const mergeSubmissions = (left, right) => {
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

const mergeRequests = (left, right) => {
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

export const mergeSortSubmissions = (arr) => {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  return mergeSubmissions(mergeSortSubmissions(left), mergeSortSubmissions(right)).reverse;
};

export const quickSortSubmissions = (arr) => {
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
  return quickSortSubmissions(leftArr).concat(pivot, quickSortSubmissions(rightArr));
};

export const mergeSortRequests = (arr) => {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  return mergeRequests(mergeSortRequests(left), mergeSortRequests(right)).reverse;
};

export const quickSortRequests = (arr) => {
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
  return quickSortRequests(leftArr).concat(pivot, quickSortRequests(rightArr));
};
