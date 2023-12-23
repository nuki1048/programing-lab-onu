import {
  binarySearch,
  binarySearchRecursive,
  linearSearch,
} from '../../1-lab/secondPoint';
import { createArrayWithFixedSize } from '../../utils/array-gen';
import { checkTimeExecutingFunc } from '../../utils/timer-check';
const MS_PER_SEC = 1000000000;
describe('tests', () => {
  let start: [number, number];
  let end = 0;

  describe('binarySearchRecursive', () => {
    test('should return the index of the target number in an array of length 10', () => {
      const array = createArrayWithFixedSize(10).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;
      const result = binarySearchRecursive(array, target);
      console.log(
        `Execution time for binarySearchRecursive with ${array.length} elements:`,

        checkTimeExecutingFunc(() => binarySearchRecursive(array, target))
      );

      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 20', () => {
      const array = createArrayWithFixedSize(20).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearchRecursive(array, target);
      console.log(
        `Execution time for binarySearchRecursive with ${array.length} elements:`,
        checkTimeExecutingFunc(() => binarySearchRecursive(array, target))
      );
      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 50', () => {
      const array = createArrayWithFixedSize(50).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearchRecursive(array, target);
      console.log(
        `Execution time for binarySearchRecursive with ${array.length} elements:`,
        checkTimeExecutingFunc(() => binarySearchRecursive(array, target))
      );
      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 100', () => {
      const array = createArrayWithFixedSize(100).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearchRecursive(array, target);
      console.log(
        `Execution time for binarySearchRecursive with ${array.length} elements:`,
        checkTimeExecutingFunc(() => binarySearchRecursive(array, target))
      );
      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 200', () => {
      const array = createArrayWithFixedSize(200).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearchRecursive(array, target);
      console.log(
        `Execution time for binarySearchRecursive with ${array.length} elements:`,
        checkTimeExecutingFunc(() => binarySearchRecursive(array, target))
      );
      expect(result).toBe(expectedIndex);
    });
  });

  describe('binarySearch', () => {
    // Existing tests...

    test('should return the index of the target number in an array of length 10', () => {
      const array = createArrayWithFixedSize(10).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearch(array, target);
      console.log(
        `Execution time for binarySearch with ${array.length} elements:`,
        checkTimeExecutingFunc(() => binarySearchRecursive(array, target))
      );
      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 20', () => {
      const array = createArrayWithFixedSize(20).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearch(array, target);
      console.log(
        `Execution time for binarySearch with ${array.length} elements:`,
        checkTimeExecutingFunc(() => binarySearchRecursive(array, target))
      );
      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 50', () => {
      const array = createArrayWithFixedSize(50).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearch(array, target);
      console.log(
        `Execution time for binarySearch with ${array.length} elements:`,
        checkTimeExecutingFunc(() => binarySearchRecursive(array, target))
      );
      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 100', () => {
      const array = createArrayWithFixedSize(100).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearch(array, target);
      console.log(
        `Execution time for binarySearch with ${array.length} elements:`,
        checkTimeExecutingFunc(() => binarySearchRecursive(array, target))
      );
      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 200', () => {
      const array = createArrayWithFixedSize(200).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearch(array, target);
      console.log(
        `Execution time for binarySearch with ${array.length} elements:`,
        checkTimeExecutingFunc(() => binarySearchRecursive(array, target))
      );
      expect(result).toBe(expectedIndex);
    });
  });

  describe('linearSearch', () => {
    // Existing tests...

    test('should return the index of the target number in an array of length 10 using linear search', () => {
      const array = createArrayWithFixedSize(10).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = linearSearch(array, target);
      console.log(
        `Execution time for linearSearch with ${array.length} elements:`,
        checkTimeExecutingFunc(() => binarySearchRecursive(array, target))
      );

      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 20 using linear search', () => {
      const array = createArrayWithFixedSize(20).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = linearSearch(array, target);
      console.log(
        `Execution time for linearSearch with ${array.length} elements:`,
        checkTimeExecutingFunc(() => binarySearchRecursive(array, target))
      );
      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 50 using linear search', () => {
      const array = createArrayWithFixedSize(50).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = linearSearch(array, target);
      console.log(
        `Execution time for linearSearch with ${array.length} elements:`,
        checkTimeExecutingFunc(() => binarySearchRecursive(array, target))
      );
      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 100 using linear search', () => {
      const array = createArrayWithFixedSize(100).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = linearSearch(array, target);
      console.log(
        `Execution time for linearSearch with ${array.length} elements:`,
        checkTimeExecutingFunc(() => binarySearchRecursive(array, target))
      );
      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 200 using linear search', () => {
      const array = createArrayWithFixedSize(200).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = linearSearch(array, target);
      console.log(
        `Execution time for linearSearch with ${array.length} elements:`,
        checkTimeExecutingFunc(() => binarySearchRecursive(array, target))
      );
      expect(result).toBe(expectedIndex);
    });
  });
});
