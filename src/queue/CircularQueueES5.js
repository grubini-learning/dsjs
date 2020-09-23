const QueueES5 = require('./QueueES5');

let CircularQueueES5 = function(capacity) {
  QueueES5.call(this, capacity);
};

CircularQueueES5.prototype = Object.create(QueueES5.prototype);
CircularQueueES5.prototype.isFull = function() {
  return this.quantity === this.capacity;
};
// CircularQueueES5.prototype.constructor = CircularQueueES5;
CircularQueueES5.prototype.enqueue = function(element) {
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
};
CircularQueueES5.prototype.dequeue = function() {
  if (this._isEmpty()) {
    return 'Underflow';
  }
  const removing = this.queue[this.top];
  this.top = ++this.top % this.capacity;
  this.decrement();
  return removing;
};
CircularQueueES5.prototype.printElements = function() {
  let str = '';
  let auxQueue = new CircularQueueES5(this.quantity);
  while(!this._isEmpty()) {
    const removed = this.dequeue();
    str += `${removed} <-- `;
    auxQueue.enqueue(removed);
  }
  this._requeue(auxQueue);
  return str;
};
CircularQueueES5.prototype._requeue = function(auxQueue) {
  while(!auxQueue._isEmpty()) {
    const removed = auxQueue.dequeue();
    this.enqueue(removed);
  }
};

module.exports = CircularQueueES5;