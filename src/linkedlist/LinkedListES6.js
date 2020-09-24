const SinglyNode = require('./SinglyNode');
const EMPTY_LIST = 'Empty List';
class LinkedListES6 {
  constructor(node) {
    this.head = node;
    this.tail = node;
    this.quantity = 1;
  }

  _isEmpty() {
    return this.quantity === 0;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
  getQuantity() {
    return this.quantity;
  }
  increment() {
    this.quantity++;
  }
  decrement() {
    this.quantity--;
  }
  _findNode(data) {
    if (this._isEmpty()) {
      return EMPTY_LIST;
    }
    let current = this.head;
    while (JSON.stringify(current.getData()) !== JSON.stringify(data)) {
      current = current.getNext();
    }
    return current;
  }
  _findPrevious(node) {
    if (this._isEmpty()) {
      return EMPTY_LIST;
    }
    const nextData = node.getData();
    let current = this.head;
    while (current && current.getNext().getData() !== nextData) {
      current = current.getNext();
    }
    return current;
  }
  addAtBeginning(node) {
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
  }
  addAfter(previousData, newNode) {
    const previousNode = this._findNode(previousData);
    if (previousNode)
      if (!previousNode.getNext()) {
        this.tail = newNode;
        previousNode.setNext(newNode);
      } else {
        newNode.setNext(previousNode.getNext());
        previousNode.setNext(newNode);
      }
    this.increment();
  }
  addAtEnd(node) {
    if (this._isEmpty()) {
      this.init(node);
    } else {
      this.tail.setNext(node);
      this.tail = node;
    }
    this.increment();
  }
  removeAtBeginning() {
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
  }
  removeAtEnd() {
    if (this._isEmpty()) {
      return EMPTY_LIST;
    }
    let removed;
    if (this.quantity === 1) {
      removed = new SinglyNode(this.head.getData());
      this.head = null;
      this.tail = null;
    } else {
      const newTail = this._findPrevious(this.tail);
      removed = new SinglyNode(this.tail.getData());
      removed.setNext(null);
      newTail.setNext(null);
      this.tail = newTail;
    }
    this.decrement();
    return removed;
  }
  removeAfter(nodeData) {
    if (this._isEmpty()) {
      return EMPTY_LIST;
    }
    const wantedNode = this._findNode(nodeData);
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

module.exports = LinkedListES6;