class QueueES6 {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = [];
    this.back = 0;
    this.top = 0;
  }

  _isEmpty() {
    return this.top === this.back;
  }
  getQuantity() {
    return this.back - this.top;
  }
  getFront() {
    return this.queue[this.top];
  }
  enqueue(element) {
    if (this.back + 1 > this.capacity) {
      return 'Overflow';
    }
    this.back++;
    this.queue.push(element);
  }
  dequeue() {
    if (this._isEmpty()) {
      return 'Underflow';
    }
    const temp = this.queue[this.top];
    this._shiftElements();
    this.back--;
    return temp;
  }
  _shiftElements() {
    for (let current = 1; current <= this.back; current++) {
      this.queue[current - 1] = this.queue[current];
    }
  }
}

module.exports = QueueES6;