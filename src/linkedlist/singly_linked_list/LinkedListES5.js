const SinglyNode = require('./SinglyNode');
const EMPTY_LIST = 'Empty List';
const LinkedListES5 = function(node) {
  this.init(node);
};

LinkedListES5.prototype.init = function(node) {
  this.tail = node;
  this.head = node;
  this.quantity = 1;
};
LinkedListES5.prototype._isEmpty = function() { return this.quantity === 0 };
LinkedListES5.prototype.getHead = function() { return this.head };
LinkedListES5.prototype.getTail = function() { return this.tail };
LinkedListES5.prototype.getQuantity = function() { return this.quantity };
LinkedListES5.prototype.increment = function() { this.quantity++ };
LinkedListES5.prototype.decrement = function() { this.quantity-- };
LinkedListES5.prototype.findNode = function(data) {
  if (this._isEmpty()) {
    return EMPTY_LIST;
  }
  let current = this.head;
  while (JSON.stringify(current.getData()) !== JSON.stringify(data)) {
    current = current.getNext();
  }
  return current;
};
LinkedListES5.prototype.findPrevious = function(node) {
  if (this._isEmpty()) {
    return EMPTY_LIST;
  }
  const nextData = node.getData();
  let current = this.head;
  while (current && current.getNext().getData() !== nextData) {
    current = current.getNext();
  }
  return current;
};
LinkedListES5.prototype.addFromBeginning = function(node) {
  if (this._isEmpty()) {
    this.init(node);
  } else {
    node.setNext(this.head);
    this.head = node;
    let current = this.head;
    let previous;
    while (current) {
      previous = current;
      current = current.getNext();
    }
    this.tail = previous;
  }
  this.increment();
};
LinkedListES5.prototype.addAfter = function(previousData, newNode) {
  const previousNode = this.findNode(previousData);
  if (previousNode)
    if (!previousNode.getNext()) {
      this.tail = newNode;
      previousNode.setNext(newNode);
    } else {
      newNode.setNext(previousNode.getNext());
      previousNode.setNext(newNode);
    }
  this.increment();
};
LinkedListES5.prototype.addFromEnd = function(node) {
  if (this._isEmpty()) {
    this.init(node);
  } else {
    this.tail.setNext(node);
    this.tail = node;
  }
  this.increment();
};
LinkedListES5.prototype.removeFromBeginning = function() {
  if (this._isEmpty()) {
    return EMPTY_LIST;
  }
  const newHead = this.head.getNext();
  const removed = new SinglyNode(this.head.getData());
  removed.setNext(null);
  if (this.quantity === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = null;
    this.head = newHead;
  }
  this.decrement();
  return removed;

};
LinkedListES5.prototype.removeFromEnd = function() {
  if (this._isEmpty()) {
    return EMPTY_LIST;
  }
  let removed;
  if (this.quantity === 1) {
    removed = new SinglyNode(this.head.getData());
    this.head = null;
    this.tail = null;
  } else {
    const newTail = this.findPrevious(this.tail);
    removed = new SinglyNode(this.tail.getData());
    removed.setNext(null);
    newTail.setNext(null);
    this.tail = newTail;
  }
  this.decrement();
  return removed;
};
LinkedListES5.prototype.removeAfter = function(nodeData) {
  if (this._isEmpty()) {
    return EMPTY_LIST;
  }
  const wantedNode = this.findNode(nodeData);
  let removedNode;
  if (!wantedNode) {
    return 'Node not found';
  }
  if (this.capacity === 1) {
    removedNode = new SinglyNode(this.head.getData());
    this.head = null;
    this.tail = null;
  } else {
    removedNode = wantedNode.getNext();
    if (!removedNode) {
      return null;
    }
    wantedNode.setNext(removedNode.getNext());
    removedNode.setNext(null);
  }
  this.decrement();
  return removedNode;
};
LinkedListES5.prototype.printList = function() {
  if (this._isEmpty()) {
    return EMPTY_LIST;
  }
  let str = '';
  let current = this.head;
  while (current) {
    str += `${current.getData()} <-- `;
    current = current.getNext();
  }
  return str;
};

module.exports = LinkedListES5;