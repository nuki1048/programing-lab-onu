export class ListNode {
  value: number;
  next: ListNode | null;
  prev: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoubleLinkedList {
  head: ListNode | null;
  tail: ListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: number): void {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  printList(): void {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  deleteNode(value: number): void {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current) {
      if (current.value === value) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        return;
      }
      current = current.next;
    }
  }

  findNumberInLinkedList(n: number): ListNode | null {
    let current = this.head;

    while (current) {
      if (current.value === n) return current;
      current = current.next;
    }
    return null;
  }
}
