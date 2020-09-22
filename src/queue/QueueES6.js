class QueueES6 {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = [];
    this.quantity = 0;
  }

  _isEmpty() {
    return this.quantity === 0;
  }
  getQuantity() {
    return this.quantity;
  }
  getFront() {
    return this.queue[0];
  }
  enqueue(element) {
    if (this.quantity + 1 > this.capacity) {
      return 'Overflow';
    }
    this.quantity++;
    this.queue.push(element);
  }
  dequeue() {
    if (this._isEmpty()) {
      return 'Underflow';
    }
    this.quantity--;
    return this.queue.shift();
  }
}

module.exports = QueueES6