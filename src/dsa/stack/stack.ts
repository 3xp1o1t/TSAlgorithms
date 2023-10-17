export type TStackOptions = {
  size?: number;
  strictSize?: boolean;
};

const defaultOptions: Required<TStackOptions> = {
  size: Infinity,
  strictSize: false,
};

export default class Stack<T> implements Iterable<T> {
  private readonly _items: Array<T> = [];
  private readonly _size: number;
  private readonly _strictSize: boolean;

  constructor(items?: Array<T> | T, options: TStackOptions = defaultOptions) {
    if (items) {
      this._items = Array.isArray(items) ? items : [items];
    }

    this._size = options.size || defaultOptions.size;
    this._strictSize = options.strictSize || defaultOptions.strictSize;

    if (this._strictSize && this._items.length > this._size) {
      throw new Error(`Array size is ${this._size}.`);
    } else {
      this._items.splice(0, this._items.length - this._size);
    }
  }

  push(item: T): void {
    if (this._items.length + 1 > this._size) {
      if (this._strictSize) {
        throw new Error('Stack overflow. Stack is full');
      } else {
        this._items.shift();
      }
    }
    this._items.push(item);
  }

  pop(): T | undefined {
    return this._items.pop();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  isFull(): boolean {
    return this._items.length === this._size;
  }

  peek(): T | undefined {
    return this._items[this._items.length - 1];
  }

  swap(item1: T, item2: T): void {
    const origin = this._items.indexOf(item1);
    const destination = this._items.indexOf(item2);

    if (origin > -1 && destination > -1) {
      this.swapByIndex(origin, destination);
    } else {
      throw new Error('Items not found');
    }
  }

  swapByIndex(origin: number, destination: number): void {
    if (
      origin < 0 ||
      destination < 0 ||
      origin >= this._items.length ||
      destination >= this._items.length
    ) {
      throw new Error('Invalid origin/destination');
    }
    [this._items[origin], this._items[destination]] = [
      this._items[destination],
      this._items[origin],
    ];
  }

  get items(): Array<T> {
    return this._items;
  }

  get size(): number {
    return this._size;
  }

  get strictSize(): boolean {
    return this._strictSize;
  }

  [Symbol.iterator](): Iterator<T, any, undefined> {
    return this._items.reverse()[Symbol.iterator]();
  }
}
