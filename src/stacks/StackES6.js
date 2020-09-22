class StackES6 {
  constructor(size) {
    this.MAX_SIZE = size;
    this.size = 0;
    this.stack = [];
  }

  _isEmpty() {
    return this.size === 0;
  }
  peek() {
    return this.stack[this.size - 1];
  }
  getSize() {
    return this.size;
  }
  push(element) {
    if (this.size > this.MAX_SIZE) {
      return 'Stack is full';
    }
    this.stack.push(element);
    this.size++;
  }
  pop() {
    if (this._isEmpty()) {
      return 'Stack is Empty'
    }
    this.size--;
    return this.stack.pop();
  }
}
module.exports = StackES6;