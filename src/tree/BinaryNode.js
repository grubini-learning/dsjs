class BinaryNode {

  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  get content() { return this.data; }
  get leftChild() { return this.left; }
  get rightChild() { return this.right; }

  set leftChild(node) { this.left = node; }
  set rightChild(node) { this.right = node; }

  hasNoChildren() { return this.left === null && this.right === null; }
  hasBothChildren() { return hasLeft && rightChild; }
  hasLeft() { return this.left !== null; }
  hasRight() { return this.right !== null; }
}

module.exports = BinaryNode;