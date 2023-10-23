// Item = Node -> But Node name can't be used due to interfaces in TS called Node.
export class Item<T> {
  value: T;
  next: Item<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  head: Item<T> | null;

  constructor(head?: Item<T>) {
    this.head = head ?? null;
  }

  insert(value: T) {
    const newItem = new Item(value);
    if (this.head === null) {
      this.head = newItem;
    } else {
      let currentItem = this.head;
      while (currentItem.next !== null) {
        currentItem = currentItem.next;
      }
      currentItem.next = newItem;
    }
  }

  print() {
    let currentItem = this.head;
    let output: T[] = [];
    while (currentItem !== null) {
      output.push(currentItem.value);
      currentItem = currentItem.next;
    }
    return output;
  }
}
