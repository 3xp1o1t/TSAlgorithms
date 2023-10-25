import { BinaryTree, BinaryTreeNode } from '../binary_tree';
describe('BinaryTree Testing', () => {
  describe('BinaryTreeNode Initialization', () => {
    it('should initialize a BinaryTreeNode', () => {
      const binaryTreeNode = new BinaryTreeNode(42);
      expect(binaryTreeNode).toBeDefined();
      expect(binaryTreeNode.value).toBe(42);
    });

    it('should create an object type BinaryTreeNode', () => {
      const binaryTreeNode = new BinaryTreeNode<Object>({
        name: 'Jest',
        age: 42,
      });
      expect(binaryTreeNode).toBeDefined();
      expect(typeof binaryTreeNode.value).toEqual('object');
      expect(binaryTreeNode.value).toEqual({ name: 'Jest', age: 42 });
    });
  });

  describe('BinaryTree manipulation', () => {
    it('should initialize a BinaryTree', () => {
      const binaryTree = new BinaryTree();
      expect(binaryTree).toBeDefined();
      expect(binaryTree.root).toBeNull();
    });

    it('should binary tree insert a value to root, right and left nodes', () => {
      const binaryTree = new BinaryTree<string>();
      expect(binaryTree).toBeDefined();

      binaryTree.insert('Jest');
      binaryTree.insert('TypeScript');
      binaryTree.insert('Algorithms');

      // JavaScript/TS use standard lexicographic depending on ANSII table order.

      expect(binaryTree.root).toBeDefined();
      expect(binaryTree.root?.value).toBe('Jest');

      expect(binaryTree.root?.right).toBeDefined();
      expect(binaryTree.root?.right?.value).toBe('TypeScript');

      expect(binaryTree.root?.left).toBeDefined();
      expect(binaryTree.root?.left?.value).toBe('Algorithms');
    });

    it('should pre order traversal return [5, 3, 1, 4, 8]', () => {
      const binaryTree = new BinaryTree<number>();

      binaryTree.insert(5);
      binaryTree.insert(3);
      binaryTree.insert(8);
      binaryTree.insert(1);
      binaryTree.insert(4);

      expect(binaryTree.root?.value).toBe(5);

      expect(binaryTree.preOrder()).not.toEqual([5, 3, 8, 1, 4]);
      expect(binaryTree.preOrder()).toEqual([5, 3, 1, 4, 8]);
    });

    it('should post order traversal return [1, 4, 3, 8, 5]', () => {
      const binaryTree = new BinaryTree<number>();

      binaryTree.insert(5);
      binaryTree.insert(3);
      binaryTree.insert(8);
      binaryTree.insert(1);
      binaryTree.insert(4);

      expect(binaryTree.postOrder()).not.toEqual([5, 3, 8, 1, 4]);
      expect(binaryTree.postOrder()).toEqual([1, 4, 3, 8, 5]);
    });

    it('should in order traversal return [1, 3, 4, 5, 8]', () => {
      const binaryTree = new BinaryTree();

      binaryTree.insert(5);
      binaryTree.insert(3);
      binaryTree.insert(8);
      binaryTree.insert(1);
      binaryTree.insert(4);

      expect(binaryTree.inOrder()).not.toEqual([5, 3, 8, 1, 4]);
      expect(binaryTree.inOrder()).toEqual([1, 3, 4, 5, 8]);
    });

    it('should find the value 1 in the binary tree', () => {
      const binaryTree = new BinaryTree<number>();

      binaryTree.insert(5);
      binaryTree.insert(3);
      binaryTree.insert(8);
      binaryTree.insert(1);
      binaryTree.insert(4);

      const foundNode = binaryTree.search(1);
      expect(foundNode).not.toBeNull();
      expect(foundNode?.value).toBe(1);
    });
  });
});
