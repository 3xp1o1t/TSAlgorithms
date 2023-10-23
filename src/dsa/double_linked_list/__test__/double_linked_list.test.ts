import { DoubleLinkedList, LNode } from '../double_linked_list';

describe('LNode testing', () => {
  describe('LNode Initialization', () => {
    it('should create a LNode instance', () => {
      const node = new LNode<string>('test');
      expect(node).toBeDefined();
    });

    it('should LNode have a prev and next properties with null values', () => {
      const node = new LNode<string>('test');
      expect(node.prev).toBeNull();
      expect(node.next).toBeNull();
    });

    it('should LNode value to be hello', () => {
      const node = new LNode<string>('hello');
      expect(node.value).toBe('hello');
    });
  });

  describe('Double Linked List Initialization', () => {
    it('should create a Double Linked List instance', () => {
      const doubleLinkedList = new DoubleLinkedList<string>();
      expect(doubleLinkedList).toBeDefined();
    });

    it('should create double linked list with a null head and tail', () => {
      const doubleLinkedList = new DoubleLinkedList<string>();
      expect(doubleLinkedList.head).toBeNull();
      expect(doubleLinkedList.tail).toBeNull();
    });

    it('should create a double linked list of any type', () => {
      const doubleLinkedList = new DoubleLinkedList<any>();
      expect(doubleLinkedList).toBeDefined();
    });
  });

  describe('Double Linked List manipulation', () => {
    it('should be empty at beggining', () => {
      const doubleLinkedList = new DoubleLinkedList<string>();
      expect(doubleLinkedList.isEmpty()).toBe(true);
    });

    it('should append a node', () => {
      const doubleLinkedList = new DoubleLinkedList<number>();
      doubleLinkedList.append(42);
      expect(doubleLinkedList.head!.value).toBe(42);
    });

    it('should prepend a node', () => {
      const doubleLinkedList = new DoubleLinkedList<boolean>();
      doubleLinkedList.prepend(true);
      expect(doubleLinkedList.head!.value).toBe(true);
    });

    it('should have a tail', () => {
      const doubleLInkedList = new DoubleLinkedList<number>();
      doubleLInkedList.append(42);
      doubleLInkedList.prepend(10);
      expect(doubleLInkedList.tail).not.toBeNull();
    });

    it('should delete the node with value "test"', () => {
      const doubleLinkedList = new DoubleLinkedList<string>();
      doubleLinkedList.append('info');
      doubleLinkedList.append('current');
      doubleLinkedList.prepend('test');

      expect(doubleLinkedList.delete('test')).toEqual('test');
      expect(doubleLinkedList.delete('test')).toBeUndefined();
      expect(doubleLinkedList.head!.value).not.toEqual('test');
    });

    it('should be empty after deleting all items', () => {
      const doubleLinkedList = new DoubleLinkedList<string>();
      doubleLinkedList.append('info');
      doubleLinkedList.append('current');
      doubleLinkedList.prepend('test');

      expect(doubleLinkedList.isEmpty()).toBe(false);

      doubleLinkedList.delete('test');
      doubleLinkedList.delete('info');
      doubleLinkedList.delete('current');

      expect(doubleLinkedList.isEmpty()).toBe(true);
    });

    it('should find the value test', () => {
      const doubleLinkedList = new DoubleLinkedList<string>();
      doubleLinkedList.append('info');
      doubleLinkedList.append('current');
      doubleLinkedList.prepend('test');

      expect(doubleLinkedList.find('test')).toEqual('test');
      expect(doubleLinkedList.find('test')).not.toEqual('info');
      expect(doubleLinkedList.find('test')).not.toEqual('current');
      expect(doubleLinkedList.find('test')).not.toBeNull();
      expect(doubleLinkedList.find('test')).not.toBeUndefined();
      expect(doubleLinkedList.find('test')).not.toEqual('hello');
      expect(doubleLinkedList.find('test')).not.toEqual('world');
      expect(doubleLinkedList.find('test')).not.toEqual('42');
      expect(doubleLinkedList.find('test')).not.toEqual('true');
      expect(doubleLinkedList.find('test')).not.toEqual('false');
      expect(doubleLinkedList.find('test')).not.toEqual('undefined');
      expect(doubleLinkedList.find('test')).not.toEqual('null');
      expect(doubleLinkedList.find('test')).not.toEqual('NaN');
    });

    it('should print an empty list if list is empty', () => {
      const doubleLinkedList = new DoubleLinkedList<string>();
      expect(doubleLinkedList.printForward()).toEqual([]);
      expect(doubleLinkedList.printBackward()).toEqual([]);
    });

    it('should print [1, 2, 3, 4, 5]', () => {
      const doubleLinkedList = new DoubleLinkedList<number>();
      doubleLinkedList.append(1);
      doubleLinkedList.append(2);
      doubleLinkedList.append(3);
      doubleLinkedList.append(4);
      doubleLinkedList.append(5);

      expect(doubleLinkedList.printForward()).toEqual([1, 2, 3, 4, 5]);
    });

    it('should print [1, 2, 3, 4, 5] in reverse order', () => {
      const doubleLinkedList = new DoubleLinkedList<number>();
      doubleLinkedList.append(1);
      doubleLinkedList.append(2);
      doubleLinkedList.append(3);
      doubleLinkedList.append(4);
      doubleLinkedList.append(5);

      expect(doubleLinkedList.printBackward()).toEqual([5, 4, 3, 2, 1]);
    });

    it('should print [1, "hello", true, {id: 1}]', () => {
      const doubleLinkedList = new DoubleLinkedList<any>();
      doubleLinkedList.append(1);
      doubleLinkedList.append('hello');
      doubleLinkedList.append(true);
      doubleLinkedList.append({ id: 1 });
      expect(doubleLinkedList.printForward()).toEqual([
        1,
        'hello',
        true,
        { id: 1 },
      ]);
    });
  });
});
