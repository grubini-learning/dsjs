const BinaryNode = require('./BinaryNode');
const QueueES5 = require('../queue/QueueES5');

const BinaryTreePseudoClassical = function(node) {
  this.root = node;
  this.quantity = 1;
};

BinaryTreePseudoClassical.prototype.isEmpty = function() { return this.quantity === 0; };
BinaryTreePseudoClassical.prototype.search = function(data) {
  const auxQueue = new QueueES5(this.quantity);
  auxQueue.enqueue(this.root);
  let current;

  if (!data) {
    while (!auxQueue.isEmpty()) {
      current = auxQueue.dequeue();

      if (current.hasBothChildren()) {
        auxQueue.enqueue(current.leftChild);
        auxQueue.enqueue(current.rightChild);
        current = auxQueue.dequeue();
      } else {
        return current;
      }
    }
  } else {
    while (!auxQueue.isEmpty()) {
      current = auxQueue.dequeue();

      if (current.content === data) {
        return current;
      } else if (current.leftChild === data) {
        return current.leftChild;
      } else if (current.rightChild === data) {
        return current rightChild;
      } else {
        auxQueue.enqueue(current.leftChild);
        auxQueue.enqueue(current.rightChild);
        current = auxQueue.dequeue();
      }
    }
  }
  return 'was not found';

};
BinaryTreePseudoClassical.prototype.calcHeight = function(node) { };
BinaryTreePseudoClassical.prototype.calcDepth = function(node) { };

BinaryTreePseudoClassical.prototype.preOrderTraversal = function() {
  //nlr
};
BinaryTreePseudoClassical.prototype.inOrderTraversal = function() {
  //lnr
};
BinaryTreePseudoClassical.prototype.postOrderTraversal = function() {
  //lrn
};

BinaryTreePseudoClassical.prototype.insert = function(node) {
  const current = this.search(null);
  if (!current.hasLeft) {
    current.leftChild = node;
  } else {
    current.rightChild = node;
  }
  this.quantity++;
};
BinaryTreePseudoClassical.prototype.remove = function(node) {
  // edge cases
    // no left child
    // no right child
    // 

};

module.exports = BinaryTreePseudoClassical;