import {
  findNumberInLinkedListRecursion,
  findNumberInLinkedList,
} from '../../1-lab/firstPoint';
import {
  generateRandomLinkedList,
  getRandomValueFromLinkedList,
} from '../../utils/linked-list-gen';

class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

describe('findNumberInLinkedListRecursion', () => {
  test('should return the node with the given value if it exists in the linked list (length 5)', () => {
    // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
    const list = new ListNode(1);
    list.next = new ListNode(2);
    list.next.next = new ListNode(3);
    list.next.next.next = new ListNode(4);
    list.next.next.next.next = new ListNode(5);

    const result = findNumberInLinkedListRecursion(list, 3);

    expect(result).toBe(list.next.next);
  });

  test('should return null if the given value does not exist in the linked list (length 5)', () => {
    // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
    const list = new ListNode(1);
    list.next = new ListNode(2);
    list.next.next = new ListNode(3);
    list.next.next.next = new ListNode(4);
    list.next.next.next.next = new ListNode(5);

    const result = findNumberInLinkedListRecursion(list, 6);

    expect(result).toBeNull();
  });

  test('should return null if the linked list is empty', () => {
    const result = findNumberInLinkedListRecursion(null, 3);

    expect(result).toBeNull();
  });

  test('should return the node with the given value if it exists in the linked list (length 10)', () => {
    const list = generateRandomLinkedList(10);
    const value = getRandomValueFromLinkedList(list);

    if (value !== null) {
      const result = findNumberInLinkedListRecursion(list.head, value);

      expect(result).not.toBeNull();
      expect(result?.value).toBe(value);
    }
  });

  test('should return the node with the given value if it exists in the linked list (length 50)', () => {
    const list = generateRandomLinkedList(50);
    const value = getRandomValueFromLinkedList(list);

    if (value !== null) {
      const result = findNumberInLinkedListRecursion(list.head, value);

      expect(result).not.toBeNull();
      expect(result?.value).toBe(value);
    }
  });

  test('should return the node with the given value if it exists in the linked list (length 100)', () => {
    const list = generateRandomLinkedList(100);
    const value = getRandomValueFromLinkedList(list);

    if (value !== null) {
      const result = findNumberInLinkedListRecursion(list.head, value);

      expect(result).not.toBeNull();
      expect(result?.value).toBe(value);
    }
  });

  test('should return the node with the given value if it exists in the linked list (length 200)', () => {
    const list = generateRandomLinkedList(200);
    const value = getRandomValueFromLinkedList(list);

    if (value !== null) {
      const result = findNumberInLinkedListRecursion(list.head, value);

      expect(result).not.toBeNull();
      expect(result?.value).toBe(value);
    }
  });
});

describe('findNumberInLinkedListRecursion', () => {
  test('should return the node with the given value if it exists in the linked list (using iterative approach)', () => {
    // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
    const list = new ListNode(1);
    list.next = new ListNode(2);
    list.next.next = new ListNode(3);
    list.next.next.next = new ListNode(4);
    list.next.next.next.next = new ListNode(5);

    const result = findNumberInLinkedList(list, 3);

    expect(result).toBe(list.next.next);
  });

  test('should return null if the given value does not exist in the linked list (using iterative approach)', () => {
    // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
    const list = new ListNode(1);
    list.next = new ListNode(2);
    list.next.next = new ListNode(3);
    list.next.next.next = new ListNode(4);
    list.next.next.next.next = new ListNode(5);

    const result = findNumberInLinkedList(list, 6);

    expect(result).toBeNull();
  });

  test('should return null if the linked list is empty (using iterative approach)', () => {
    const result = findNumberInLinkedList(null, 3);

    expect(result).toBeNull();
  });

  test('should return the node with the given value if it exists in the linked list (using iterative approach, length 10)', () => {
    const list = generateRandomLinkedList(10);
    const value = getRandomValueFromLinkedList(list);

    if (value !== null) {
      const result = findNumberInLinkedList(list.head, value);

      expect(result).not.toBeNull();
      expect(result?.value).toBe(value);
    }
  });

  test('should return the node with the given value if it exists in the linked list (using iterative approach, length 50)', () => {
    const list = generateRandomLinkedList(50);
    const value = getRandomValueFromLinkedList(list);

    if (value !== null) {
      const result = findNumberInLinkedList(list.head, value);

      expect(result).not.toBeNull();
      expect(result?.value).toBe(value);
    }
  });

  test('should return the node with the given value if it exists in the linked list (using iterative approach, length 100)', () => {
    const list = generateRandomLinkedList(100);
    const value = getRandomValueFromLinkedList(list);

    if (value !== null) {
      const result = findNumberInLinkedList(list.head, value);

      expect(result).not.toBeNull();
      expect(result?.value).toBe(value);
    }
  });

  test('should return the node with the given value if it exists in the linked list (using iterative approach, length 200)', () => {
    const list = generateRandomLinkedList(200);
    const value = getRandomValueFromLinkedList(list);

    if (value !== null) {
      const result = findNumberInLinkedList(list.head, value);

      expect(result).not.toBeNull();
      expect(result?.value).toBe(value);
    }
  });
});
