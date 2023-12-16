export function createArrayWithFixedSize(size: number): number[] {
  return Array(size)
    .fill(1)
    .map(() => Math.round(Math.random() * (100000 - 0) + 0));
}
