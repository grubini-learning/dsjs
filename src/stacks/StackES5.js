const StackES5 = function(quantity) {
  this.MAX_SIZE = quantity;
  this.stack = [];
  this.size = -1;
};

StackES5.prototype._isEmpty = function() {return this.size === -1};
StackES5.prototype.peek = function() {return this.stack[this.size]};
StackES5.prototype.getSize = function() {return this.size + 1};
StackES5.prototype.push = function(element) {
  if (this.size + 1 === this.MAX_SIZE) {
    return 'Stack is full';
  }
  this.stack.push(element);
  this.size++;
};
StackES5.prototype.pop = function() {
  if (this._isEmpty()) {
    return 'Stack is Empty';
  }
  this.size--;
  return this.stack.pop();
};

module.exports = StackES5;