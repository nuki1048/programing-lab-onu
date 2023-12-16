import {
  binarySearch,
  binarySearchRecursive,
  linearSearch,
} from '../../1-lab/secondPoint';
import { createArrayWithFixedSize } from '../../utils/array-gen';
const MS_PER_SEC = 1000000000;
describe('tests', () => {
  let start: [number, number];
  let end = 0;
  beforeEach(() => {
    start = process.hrtime();
  });

  afterEach(() => {
    const end = process.hrtime(start);
    const diff = end[0] * MS_PER_SEC + end[1] / 1000000;

    console.log(`Execution time: ${diff}ms`);
  });
  describe('binarySearchRecursive', () => {
    test('should return the index of the target number in an array of length 10', () => {
      const array = createArrayWithFixedSize(10).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearchRecursive(array, target);

      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 20', () => {
      const array = createArrayWithFixedSize(20).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearchRecursive(array, target);

      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 50', () => {
      const array = createArrayWithFixedSize(50).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearchRecursive(array, target);

      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 100', () => {
      const array = createArrayWithFixedSize(100).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearchRecursive(array, target);

      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 200', () => {
      const array = createArrayWithFixedSize(200).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearchRecursive(array, target);

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

      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 20', () => {
      const array = createArrayWithFixedSize(20).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearch(array, target);

      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 50', () => {
      const array = createArrayWithFixedSize(50).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearch(array, target);

      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 100', () => {
      const array = createArrayWithFixedSize(100).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearch(array, target);

      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 200', () => {
      const array = createArrayWithFixedSize(200).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = binarySearch(array, target);

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

      const startTime = new Date().getTime();
      const result = linearSearch(array, target);
      const endTime = new Date().getTime();
      const executionTime = endTime - startTime;

      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 20 using linear search', () => {
      const array = createArrayWithFixedSize(20).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = linearSearch(array, target);

      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 50 using linear search', () => {
      const array = createArrayWithFixedSize(50).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = linearSearch(array, target);

      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 100 using linear search', () => {
      const array = createArrayWithFixedSize(100).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = linearSearch(array, target);

      expect(result).toBe(expectedIndex);
    });

    test('should return the index of the target number in an array of length 200 using linear search', () => {
      const array = createArrayWithFixedSize(200).sort((a, b) => a - b);
      const randomIndex = Math.round(Math.random() * (array.length - 0) + 0);
      const target = array[randomIndex];
      const expectedIndex = randomIndex;

      const result = linearSearch(array, target);

      expect(result).toBe(expectedIndex);
    });
  });
});
