import { LinkedList, ListNode } from '../../4-lab/linkedList';

describe('LinkedList', () => {
  let linkedList: LinkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test('append() should add nodes to the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.head?.value).toBe(1);
    expect(linkedList.head?.next?.value).toBe(2);
    expect(linkedList.head?.next?.next?.value).toBe(3);
  });

  test('printList() should print the values of nodes in the linked list', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    linkedList.printList();

    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(2);
    expect(consoleSpy).toHaveBeenCalledWith(3);

    consoleSpy.mockRestore();
  });

  test('deleteNode() should delete a node from the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    linkedList.deleteNode(2);

    expect(linkedList.head?.value).toBe(1);
    expect(linkedList.head?.next?.value).toBe(3);
  });

  test('findNumberInLinkedList() should find a node with a specific value', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    const foundNode: ListNode | null = linkedList.findNumberInLinkedList(2);
    const notFoundNode: ListNode | null = linkedList.findNumberInLinkedList(5);

    expect(foundNode?.value).toBe(2);
    expect(notFoundNode).toBeNull();
  });
});
