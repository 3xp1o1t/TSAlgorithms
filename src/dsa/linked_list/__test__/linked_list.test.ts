import { Item, LinkedList } from '../linked_list';
describe('Linked List testing', () => {
  describe('Item initialization', () => {
    it('should create a null item', () => {
      const item = new Item(null);

      expect(item.value).toBeNull();
    });

    it('should create a non-null item of type string', () => {
      const item = new Item('test');
      expect(typeof item.value).toBe('string');
    });

    it('should create a non-null item of type number', () => {
      const item = new Item(42);
      expect(typeof item.value).toBe('number');
    });

    it('should create a item with a next value equal to null', () => {
      const item = new Item(null);
      expect(item.next).toBeNull();
    });
  });

  describe('Linked list initilization', () => {
    it('should create a linked list with a null head', () => {
      const linkedList = new LinkedList<null>();
      expect(linkedList.head).toBeNull();
    });

    it('should create a linked list of type string but with null head', () => {
      const linkedList = new LinkedList<string>();
      expect(linkedList.head).toBeNull();
    });

    it('should create a linked list with a head of type item', () => {
      const item = new Item('Hello');
      const linkedList = new LinkedList<string>(item);
      expect(linkedList.head).toEqual(item);
    });
  });

  describe('Linked List manipulation', () => {
    it('should insert an item of type number', () => {
      const linkedList = new LinkedList<number>();
      linkedList.insert(42);
      expect(linkedList.head?.value).toBe(42);
    });

    it('should insert an item of type string and a next value of type string', () => {
      const linkedList = new LinkedList<string>();
      linkedList.insert('Head text');
      linkedList.insert('Next value');
      expect(linkedList.head?.value).toBe('Head text');
      expect(linkedList.head?.next?.value).toBe('Next value');
    });

    it('should insert an item of type object', () => {
      const linkedList = new LinkedList<Object>();
      linkedList.insert({ name: 'John', surname: 'Doe' });
      expect(typeof linkedList.head).toBe('object');
    });

    it('should print the linked list', () => {
      const linkedList = new LinkedList<string>();
      linkedList.insert('Head text');
      linkedList.insert('Next value');
      expect(linkedList.print()).toEqual(['Head text', 'Next value']);
    });

    it('should print the linked list of object type', () => {
      const linkedList = new LinkedList<Object>();
      linkedList.insert({ name: 'John', surname: 'Doe' });
      linkedList.insert({ dollarType: 'USD', amount: '100' });
      expect(linkedList.print()).toEqual([
        { name: 'John', surname: 'Doe' },
        { dollarType: 'USD', amount: '100' },
      ]);
    });

    it('should print an empty list if is empty', () => {
      const linkedList = new LinkedList<string>();
      expect(linkedList.print()).toEqual([]);
    });
  });
});
