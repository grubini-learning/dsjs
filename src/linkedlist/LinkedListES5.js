const SinglyNode = require('./SinglyNode');

const LinkedListES5 = function(node) {
  this.head = node;
  this.tail = node;
  this.quantity = 1;
};

LinkedListES5.prototype._isEmpty = function() {};
LinkedListES5.prototype.getHead = function() {};
LinkedListES5.prototype.addFromBeginning = function() {};
LinkedListES5.prototype.addAfter = function() {};
LinkedListES5.prototype.addFromEnd = function() {};
LinkedListES5.prototype.removeFromBeginning = function() {};
LinkedListES5.prototype.removeFromEnd = function() {};
LinkedListES5.prototype.removeAfter = function() {};
LinkedListES5.prototype.printList = function() {};