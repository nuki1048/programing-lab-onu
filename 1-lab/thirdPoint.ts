import { checkTimeExecutingFunc } from '../utils/timer-check';

export function fibonacciReclusion(n: number): number {
  return n <= 1 ? n : fibonacciReclusion(n - 1) + fibonacciReclusion(n - 2);
}

export function fibonacci(n: number): number {
  let a = 0,
    b = 1,
    c,
    i;

  for (i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}
