let QueueES5 = function(capacity) {
  this.capacity = capacity;
  this.queue = [];
  this.quantity = 0;
};

QueueES5.prototype._isEmpty = function() { return this.quantity === 0 };
QueueES5.prototype.getQuantity = function() { return this.quantity };
QueueES5.prototype.getFront = function() {
  if (this._isEmpty()) {
    return 'There are no elements';
  }
  return this.queue[0];
};
QueueES5.prototype.enqueue = function(element) {
  if (this.quantity + 1 > this.capacity) {
    return 'Overflow';
  }
  this.quantity++;
  this.queue.push(element);
};
QueueES5.prototype.dequeue = function() {
  if (this._isEmpty()) {
    return 'Underflow';
  }
  this.quantity--;
  return this.queue.shift();
};

module.exports = QueueES5;