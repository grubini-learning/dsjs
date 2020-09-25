const DoublyNode = require('./DoublyNode');
const EMPTY_LIST = 'empty list';

class DoublyLinkedListES6 {
  constructor(node) {
    this.init(node);
  }

  init(node) {
    this.head = node;
    this.tail = node;
    this.quantity = 1;
  }
  _isEmpty() { return this.quantity = 0; }
  getHead() { return this.head; }
  getTail() { return this.tail; }
  getQuantity() { return this.quantity; }
  increment() { this.quantity++; }
  decrement() { this.quantity--; }
  _findNode(nodeData) {
    if (this._isEmpty()) {
      return EMPTY_LIST;
    }
    let current = this.head;
    while (current && JSON.stringify(current.getData()) !== JSON.stringify(nodeData)) {
      current = current.getNext();
    }
    return current;
  }
  _findPrevious(nodeData) {
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
  }
  addAtFront(newNode) {
    if (this._isEmpty()) {
      this.init(newNode);
    } else {
      newNode.setNext(this.head);
      this.head.setPrevious(newNode);
      this.head = newNode;
    }
    this.increment();
  }
  addAfter(nodesData, newNode) {
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
  }
  addAtEnd(newNode) {
    if (this._isEmpty()) {
      this.init(newNode);
    } else {
      this.tail.setNext(newNode);
      newNode.setPrevious(this.tail);
      this, tail = newNode;
    }
    this.increment();
  }
  removeAtFront() {
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
  }
  removeAfter(removeData) {
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
  }
  removeAtEnd() {
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
  }
  printList() {
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
  }
}

module.exports = DoublyLinkedListES6;