import { quickSort } from '../../2-lab/quickSort';
import { createArrayWithFixedSize } from '../../utils/array-gen';
import { checkTimeExecutingFunc } from '../../utils/timer-check';

describe('testing index file', () => {
  test('standard test', () => {
    const testArr = [0, -50, 6, 25, 22, 10, 5, 10, 50, 1500];

    const sort = quickSort(testArr, 0, testArr.length);
    console.log(
      'Time executing for 10 elements is:',
      checkTimeExecutingFunc(() => sort)
    );
    expect(sort).toStrictEqual(testArr.sort((a, b) => a - b));
  });

  test('random arr with fixed 1000 size', () => {
    const testArr = createArrayWithFixedSize(1000);

    const sort = quickSort(testArr, 0, testArr.length);
    console.log(
      'Time executing for 1000 elements is:',
      checkTimeExecutingFunc(() => sort)
    );
    expect(sort).toStrictEqual(testArr.sort((a, b) => a - b));
  });
  test('random arr with fixed 10.000 size', () => {
    const testArr = createArrayWithFixedSize(10000);
    const sort = quickSort(testArr, 0, testArr.length);
    console.log(
      'Time executing for 10.0000 elements is:',
      checkTimeExecutingFunc(() => sort)
    );
    expect(sort).toStrictEqual(testArr.sort((a, b) => a - b));
  });
  test('random arr with fixed 100.000 size', () => {
    const testArr = createArrayWithFixedSize(100000);
    const sort = quickSort(testArr, 0, testArr.length);
    console.log(
      'Time executing for 100.000 elements is:',
      checkTimeExecutingFunc(() => sort)
    );
    expect(sort).toStrictEqual(testArr.sort((a, b) => a - b));
  });
  test('empty array', () => {
    const testArr = [];
    expect(quickSort(testArr, 0, testArr.length)).toStrictEqual([]);
  });
});
