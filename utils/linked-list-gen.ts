import { LinkedList, ListNode } from './interfaces';

export function generateRandomLinkedList(size: number): LinkedList {
  const linkedList = new LinkedList();

  for (let i = 0; i < size; i++) {
    const randomValue = Math.floor(Math.random() * 1000000); // Random number between 0 and 99
    linkedList.append(randomValue);
  }

  return linkedList;
}

export function getRandomValueFromLinkedList(list: LinkedList): number | null {
  if (!list.head) {
    return null; // Return null if the linked list is empty.
  }

  // Count the number of nodes in the linked list.
  let current: ListNode | null = list.head;
  let size = 0;
  while (current) {
    size++;
    current = current.next;
  }

  // Generate a random index between 0 and size - 1.
  const randomIndex = Math.floor(Math.random() * size);

  // Traverse the list to the node at the random index.
  current = list.head;
  for (let i = 0; i < randomIndex; i++) {
    if (current) {
      current = current.next;
    }
  }

  // Return the value of the node at the random index.
  return current ? current.value : null;
}
