import { DoubleLinkedList } from '../../4-lab/doubleLinkedList';

describe('DoubleLinkedList', () => {
  it('should append values correctly', () => {
    const list = new DoubleLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list?.head?.value).toBe(1);
    expect(list?.head?.next?.value).toBe(2);
    expect(list?.head?.next?.next?.value).toBe(3);
    expect(list?.tail?.value).toBe(3);
    expect(list?.tail?.prev?.value).toBe(2);
    expect(list?.tail?.prev?.prev?.value).toBe(1);
  });

  // Add more tests for other methods of DoubleLinkedList here...
});
