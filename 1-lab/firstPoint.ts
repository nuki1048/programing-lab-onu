// # 1 Finding number in linked list

import { ListNode } from '../utils/interfaces';
import {
  generateRandomLinkedList,
  getRandomValueFromLinkedList,
} from '../utils/linked-list-gen';
import { checkTimeExecutingFunc } from '../utils/timer-check';

export function findNumberInLinkedList(
  list: ListNode | null,
  n: number
): ListNode | null {
  let head = list;

  while (head !== null) {
    if (head.value === n) return head;
    head = head.next;
  }
  return null;
}

export function findNumberInLinkedListRecursion(
  list: ListNode | null,
  n: number
): ListNode | null {
  const head = list;

  if (head === null) return null;
  if (head.value === n) return head;

  return findNumberInLinkedListRecursion(head.next, n);
}

const randomLinkedList = generateRandomLinkedList(1000);
const randomValue = getRandomValueFromLinkedList(randomLinkedList);

const iterativeSearch = findNumberInLinkedList(
  randomLinkedList.head,
  randomValue as number
);

const recursiveSearch = findNumberInLinkedListRecursion(
  randomLinkedList.head,
  randomValue as number
);

console.log(
  'Iterative search:',
  checkTimeExecutingFunc(() => iterativeSearch),
  iterativeSearch
);

console.log(
  'Binary search:',
  checkTimeExecutingFunc(() => recursiveSearch),
  recursiveSearch
);

console.log(`Value is: ${randomValue}`);
