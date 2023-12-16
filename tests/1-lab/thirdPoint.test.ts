import { fibonacci, fibonacciReclusion } from '../../1-lab/thirdPoint';
const MS_PER_SEC = 1000000000;

describe('fibonacciReclusion', () => {
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

  test('should return 0 for input 0', () => {
    const result = fibonacciReclusion(0);
    expect(result).toBe(0);
  });

  test('should return 1 for input 1', () => {
    const result = fibonacciReclusion(1);
    expect(result).toBe(1);
  });

  test('should return 1 for input 2', () => {
    const result = fibonacciReclusion(2);
    expect(result).toBe(1);
  });

  test('should return 2 for input 3', () => {
    const result = fibonacciReclusion(3);
    expect(result).toBe(2);
  });

  test('should return 3 for input 4', () => {
    const result = fibonacciReclusion(4);
    expect(result).toBe(3);
  });

  test('should return 5 for input 5', () => {
    const result = fibonacciReclusion(5);
    expect(result).toBe(5);
  });

  // Add more test cases as needed
});

describe('fibonacci', () => {
  test('should return 1 for input 0', () => {
    const result = fibonacci(0);
    expect(result).toBe(1);
  });

  test('should return 1 for input 1', () => {
    const result = fibonacci(1);
    expect(result).toBe(1);
  });

  test('should return 1 for input 2', () => {
    const result = fibonacci(2);
    expect(result).toBe(1);
  });

  test('should return 2 for input 3', () => {
    const result = fibonacci(3);
    expect(result).toBe(2);
  });

  test('should return 3 for input 4', () => {
    const result = fibonacci(4);
    expect(result).toBe(3);
  });

  test('should return 5 for input 5', () => {
    const result = fibonacci(5);
    expect(result).toBe(5);
  });

  // Add more test cases as needed

  test('should return 8 for input 6', () => {
    const result = fibonacci(6);
    expect(result).toBe(8);
  });

  test('should return 13 for input 7', () => {
    const result = fibonacci(7);
    expect(result).toBe(13);
  });

  test('should return 21 for input 8', () => {
    const result = fibonacci(8);
    expect(result).toBe(21);
  });
});
