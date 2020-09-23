class QueueES6 {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = [];
    this.quantity = 0;
    this.back = 0;
    this.top = 0;
  }

  _isEmpty() {
    return this.quantity === 0;
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
  getFront() {
    if (this._isEmpty()) {
      return 'There are no elements';
    }
    return this.queue[this.top];
  }
  enqueue(element) {
    if (this.back + 1 > this.capacity) {
      return 'Overflow';
    }
    this.back++;
    this.increment();
    this.queue.push(element);
  }
  dequeue() {
    if (this._isEmpty()) {
      return 'Underflow';
    }
    const temp = this.queue[this.top];
    this._shiftElements();
    this.back--;
    this.decrement();
    return temp;
  }
  _shiftElements() {
    for (let current = 1; current <= this.back; current++) {
      this.queue[current - 1] = this.queue[current];
    }
  }
  printElements() {
    let str = '';
    for (let current = this.top; current < this.back; current++) {
      str += `${this.queue[current]} <-- `;
    }
    return str;
  }
}

module.exports = QueueES6;