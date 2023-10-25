export class BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree<T> {
  root: BinaryTreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    this.root = this.insertNode(value, this.root);
  }

  private insertNode(
    value: T,
    root: BinaryTreeNode<T> | null,
  ): BinaryTreeNode<T> {
    if (root === null) {
      return new BinaryTreeNode(value);
    }

    if (value < root.value) {
      root.left = this.insertNode(value, root.left);
    } else if (value > root.value) {
      root.right = this.insertNode(value, root.right);
    }
    return root;
  }

  preOrder(): T[] {
    const result: T[] = [];
    this.preOrderTraversal(this.root, result);
    return result;
  }

  private preOrderTraversal(node: BinaryTreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      result.push(node.value);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
  }

  postOrder(): T[] {
    const result: T[] = [];
    this.postOrderTraversal(this.root, result);
    return result;
  }

  private postOrderTraversal(
    node: BinaryTreeNode<T> | null,
    result: T[],
  ): void {
    if (node !== null) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      result.push(node.value);
    }
  }

  inOrder(): T[] {
    const result: T[] = [];
    this.inOrderTraversal(this.root, result);
    return result;
  }

  private inOrderTraversal(node: BinaryTreeNode<T> | null, result: T[]) {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
  }

  search(value: T): BinaryTreeNode<T> | null {
    return this.recursiveSearch(this.root, value);
  }

  private recursiveSearch(
    node: BinaryTreeNode<T> | null,
    value: T,
  ): BinaryTreeNode<T> | null {
    if (!node) return null;

    if (node.value === value) {
      return node;
    } else {
      if (value < node.value) {
        return this.recursiveSearch(node.left, value);
      } else {
        return this.recursiveSearch(node.right, value);
      }
    }
  }
}
