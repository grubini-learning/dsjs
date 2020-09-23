let QueueES5 = function(capacity) {
  this.capacity = capacity;
  this.queue = [];
  this.quantity = 0;
  this.back = 0;
  this.top = 0;
};

QueueES5.prototype._isEmpty = function() { return this.quantity === 0 };
QueueES5.prototype.getQuantity = function() { return this.quantity };
QueueES5.prototype.increment = function() { this.quantity++ };
QueueES5.prototype.decrement = function() { this.quantity--; }
QueueES5.prototype.getFront = function() {
  if (this._isEmpty()) {
    return 'There are no elements';
  }
  return this.queue[this.top];
};
QueueES5.prototype.enqueue = function(element) {
  if (this.back + 1 > this.capacity) {
    return 'Overflow';
  }
  this.back++;
  this.increment();
  this.queue.push(element);
};
QueueES5.prototype.dequeue = function() {
  if (this._isEmpty()) {
    return 'Underflow';
  }
  const temp = this.queue[this.top];
  this._shiftElements();
  this.back--;
  this.decrement();
  return temp;
};
QueueES5.prototype._shiftElements = function() {
  for (let current = 1; current <= this.back; current++) {
    this.queue[current - 1] = this.queue[current];
  }
};
QueueES5.prototype.printElements = function() {
  let str = '';
  for (let current = this.top; current < this.back; current++) {
    str += `${this.queue[current]} <-- `;
  }
  return str;
};

module.exports = QueueES5;