export const countingSort = (arr: number[]): number[] => {
  if (arr.length === 0) {
    return [];
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;
  const counts: number[] = new Array(range).fill(0);
  const sortedArr: number[] = new Array(arr.length);

  for (const num of arr) {
    const index = num - min;
    counts[index]++;
  }

  for (let i = 1; i < range; i++) {
    counts[i] += counts[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    const index = num - min;
    const sortedIndex = counts[index] - 1;
    sortedArr[sortedIndex] = num;
    counts[index]--;
  }

  return sortedArr;
};
