const MS_PER_SEC = 1000000000;

export function checkTimeExecutingFunc(callback: (...args: any[]) => unknown) {
  const start = process.hrtime();

  callback();
  const end = process.hrtime(start);
  const diff = end[0] * MS_PER_SEC + end[1] / 1000000;

  return `The function has finished execution after ${diff}ms`;
}
