const DoublyNode = require('./DoublyNode');
const EMPTY_LIST = 'Empty List';

const DoublyLinkedListES5 = function(node) {
  this.init(node);
};

DoublyLinkedListES5.prototype.init = function(node) {
  this.head = node;
  this.tail = node;
  this.quantity = 1;
};
DoublyLinkedListES5.prototype._isEmpty = function() { return this.quantity === 0 };
DoublyLinkedListES5.prototype.getHead = function() { return this.head };
DoublyLinkedListES5.prototype.getTail = function() { return this.tail };
DoublyLinkedListES5.prototype.getQuantity = function() { return this.quantity };
DoublyLinkedListES5.prototype.increment = function() { this.quantity++ };
DoublyLinkedListES5.prototype.decrement = function() { this.quantity-- };
DoublyLinkedListES5.prototype._findNode = function(nodeData) {
  if (this._isEmpty()) {
    return EMPTY_LIST;
  }
  let current = this.head;
  while (current && JSON.stringify(current.getData()) !== JSON.stringify(nodeData)) {
    current = current.getNext();
  }
  return current;
};
DoublyLinkedListES5.prototype._findPrevious = function(nodeData) {
  if (this._isEmpty()) {
    return EMPTY_LIST;
  }
  let previous = this.head;
  let current = previous;
  while (current && JSON.stringify(current.getData()) !== JSON.stringify(nodeData)) {
    previous = current;
    current = current.getNext();
  }
  return current;
};
DoublyLinkedListES5.prototype.addAtFront = function(newNode) {
  if (this._isEmpty()) {
    this.init(newNode);
  } else {
    newNode.setNext(this.head);
    this.head.setPrevious(newNode);
    this.head = newNode;
  }
  this.increment();
};
DoublyLinkedListES5.prototype.addAfter = function(nodesData, newNode) {
  if (this._isEmpty()) {
    return EMPTY_LIST;
  }
  const wantedNode = this._findNode(nodesData);
  if (wantedNode) {

    if (this.quantity === 1) {
      this.head.setNext(newNode);
      newNode.setPrevious(this.head);
      this.tail = newNode;
    } else {

      newNode.setNext(wantedNode.getNext());
      newNode.getNext().setPrevious(newNode);
      newNode.setPrevious(wantedNode);
      wantedNode.setNext(newNode);
    }
    this.increment();
  }
};
DoublyLinkedListES5.prototype.AddAtEnd = function(newNode) {
  if (this._isEmpty()) {
    this.init(newNode);
  } else {
    this.tail.setNext(newNode);
    newNode.setPrevious(this.tail);
    this, tail = newNode;
  }
  this.increment();
};
DoublyLinkedListES5.prototype.removeAtFront = function() {
  if (this._isEmpty()) {
    return EMPTY_LIST;
  }
  const removed = new DoublyNode(this.head.getData())
  if (this.quantity === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.getNext();
    this.head.setPrevious(null);
  }
  return removed;
};
DoublyLinkedListES5.prototype.removeAfter = function(removeData) {
  if (this._isEmpty()) {
    return EMPTY_LIST;
  }
  const wantedNode = this._findPrevious(removeData);

  if (!wantedNode) {
    return 'Node not found.'
  }
  const removed = new DoublyNode(wantedNode.getNext().getData());
  const removingNode = wantedNode.getNext();
  if (!removingNode.getNext()) {
    wantedNode.setNext(null);
  } else {
    wantedNode.setNext(removingNode.getNext());
    removingNode.getNext().setPrevious(wantedNode);
  }
  removingNode.setNext(null);
  removingNode.setPrevious(null);
  return removed;
};
DoublyLinkedListES5.prototype.removeAtEnd = function() {
  if (this._isEmpty()) {
    return EMPTY_LIST;
  }
  let removed;
  if (this.quantity === 1) {
    removed = new DoublyNode(this.head.getData());
    this.head = null;
    this.tail = null;
  } else {
    removed = new DoublyNode(this.tail.getData());
    this.tail = this.tail.getPrevious();
    this.tail.setNext(null);
  }
  this.decrement();
  return removed;
};
DoublyLinkedListES5.prototype.printList = function() {
  if (this._isEmpty()) {
    return EMPTY_LIST;
  }
  let str = '';
  let current = this.head;
  while(current) {
    str += `${current.getData()} <-- `;
    current = current.getNext();
  }
  return str;
};

module.exports = DoublyLinkedListES5;