class Stack {
  constructor(size) {
    this.MAX_SIZE = size;
    this.size = 0;
    this.stack = [];
  }

  _isEmpty() {
    return this.size === 0;
  }
  peek() {
    return this.stack[this.size];
  }
  getSize() {
    return this.size;
  }
  push(element) {
    if (this.size + 1 > this.MAX_SIZE) {
      return 'Array is full';
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