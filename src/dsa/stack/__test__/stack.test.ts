import Stack from '../stack';

describe('Stack test', () => {
  describe('Stack initialization', () => {
    test('Stack initialization without options', () => {
      const stack = new Stack();
      expect(stack.items.length).toBe(0);
    });

    test('Stack initialization with one value', () => {
      const stack = new Stack(1);
      expect(stack.items[0]).toBe(1);
    });

    test('Stack initialization with multiple values', () => {
      const stack = new Stack([1, 2, 3]);
      expect(stack.items.length).toBe(3);
      expect(stack.items[0]).toBe(1);
      expect(stack.items[1]).toBe(2);
      expect(stack.items[2]).toBe(3);
    });

    test('Stack initialization with options', () => {
      const stack = new Stack([], {
        size: 3,
        strictSize: true,
      });

      expect(stack.items.length).toBe(0);
      expect(stack.size).toBe(3);
      expect(stack.strictSize).toBe(true);
    });
  });

  describe('Stack manipulation', () => {
    test('Stack push without limits', () => {
      const stack = new Stack();

      stack.push(1);
      expect(stack.items.length).toBe(1);
      expect(stack.items[0]).toBe(1);
    });

    test('Stack push with fixed size', () => {
      const stack = new Stack(<number>(<unknown>[]), { size: 1 });
      stack.push(1);
      stack.push(2);

      expect(stack.items.length).toBe(1);
      expect(stack.items[0]).toBe(2);
    });

    test('Stack push with strict size', () => {
      const stack = new Stack(<number>(<unknown>[]), {
        size: 1,
        strictSize: true,
      });

      stack.push(1);
      expect(() => stack.push(2)).toThrowError('Stack overflow. Stack is full');
    });

    test('Stack swap items', () => {
      const stack = new Stack([1, 2]);

      stack.swap(1, 2);
      expect(stack.items[0]).toBe(2);
      expect(stack.items[1]).toBe(1);
    });

    test('Stack Symbol.iterator', () => {
      const stack = new Stack([1, 2]);
      expect([...stack]).toEqual([2, 1]);
    });
  });
});
