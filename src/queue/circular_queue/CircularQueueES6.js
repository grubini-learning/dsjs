const { expect } = require('chai');
const QueueES6 = require('../QueueES6');

class CircularQueueES6 extends QueueES6 {
  constructor(capacity) {
    super(capacity);
  }

  isFull() {
    return this.quantity === this.capacity;
  }
  enqueue(element) {
    if (this.isFull()) {
      return 'Overflow';
    }
    let position = 0;
    if (this._isEmpty()) {
      position = this.top;
    } else {
      this.back = (this.top + this.quantity) % this.capacity;
      position = this.back;
    }
    this.queue[position] = element;
    this.increment();
  }
  dequeue() {
    if (this._isEmpty()) {
      return 'Underflow';
    }
    const removing = this.queue[this.top];
    this.top = ++this.top % this.capacity;
    this.decrement();
    return removing;
  }
  printElements() {
    let str = '';
    let auxQueue = new CircularQueueES6(this.quantity);
    while (!this._isEmpty()) {
      const removed = this.dequeue();
      str += `${removed} <-- `;
      auxQueue.enqueue(removed);
    }
    this._requeue(auxQueue);
    return str;
  }
  _requeue(auxQueue) {
    while(!auxQueue._isEmpty()) {
      const removed = auxQueue.dequeue();
      this.enqueue(removed);
    }
  }
}

module.exports = CircularQueueES6;