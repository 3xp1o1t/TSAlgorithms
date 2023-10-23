export class LNode<T> {
  value: T;
  prev: LNode<T> | null;
  next: LNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoubleLinkedList<T> {
  head: LNode<T> | null;
  tail: LNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: T) {
    const newNode = new LNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      /** ts */
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value: T) {
    const newNode = new LNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  isEmpty() {
    return this.head === null;
  }

  delete(value: T) {
    let currentNode = this.head;
    let deletedNode: LNode<T> | null = null;

    while (currentNode) {
      if (currentNode.value === value) {
        deletedNode = currentNode;
        if (currentNode.prev) {
          currentNode.prev.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }

        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        } else {
          this.tail = currentNode.prev;
        }
      }
      currentNode = currentNode.next;
    }
    return deletedNode?.value;
  }

  find(value: T) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  printForward() {
    let currentNode = this.head;
    const output: T[] = [];

    while (currentNode) {
      output.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return output;
  }

  printBackward() {
    let currentNode = this.tail;
    const output: T[] = [];

    while (currentNode) {
      output.push(currentNode.value);
      currentNode = currentNode.prev;
    }

    return output;
  }
}
