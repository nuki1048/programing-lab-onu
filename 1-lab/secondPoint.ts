import { createArrayWithFixedSize } from '../utils/array-gen';
import { checkTimeExecutingFunc } from '../utils/timer-check';

export function binarySearchRecursive(
  array: number[],
  n: number,
  low: number = 0,
  high: number = array.length - 1
): number {
  if (low > high) {
    return -1;
  }

  const mid = low + Math.floor((high - low) / 2);

  if (array[mid] === n) {
    return mid;
  } else if (array[mid] > n) {
    return binarySearchRecursive(array, n, low, mid - 1);
  } else {
    return binarySearchRecursive(array, n, mid + 1, high);
  }
}

export function binarySearch(array: number[], n: number): number {
  let low = 0;
  let high = array.length - 1;
  let mid;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);

    if (array[mid] == n) return mid;

    if (array[mid] > n) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
}

export const linearSearch = (array: number[], target: number): number => {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
};

const array = createArrayWithFixedSize(10000);
