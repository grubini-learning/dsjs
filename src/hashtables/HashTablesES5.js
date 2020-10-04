const HashNode = require('./HashNode');
const SinglyLinkedList = require('../linkedlist/singly_linked_list/LinkedListES5');
const SinglyNode = require('../linkedlist/singly_linked_list/SinglyNode');
const CollisionTechnique = require('./CollisionTechnique');

const HashTableES5 = function(maxCapacity, minCapacity, currentCapacity, hashingMethod, colMethod = undefined) {
  this.MAX_CAPACITY = maxCapacity;
  this.MIN_CAPACITY = minCapacity;
  this.currentCapacity = currentCapacity;
  this.hMethod = hashingMethod;
  this.quantity = 0;
  this.colMethod = colMethod;
  this.hashTable = new Array(this.currentCapacity);
};

HashTableES5.prototype.insert = function(data) {
  // i would calculate the first hash and try to add it
  const firstHash = this._firstLevelHashFunction(data);
  const surrogateHashNode = new HashNode(data);
  const isCollision = this._isCollision(firstHash);
  let message = 'successfull insertion';
  // if there is a number there, then there is a collision
  if (this.colMethod !== CollisionTechnique.techniques.CHAINING) {
    if (isCollision) {
      const wasSuccessfull = CollisionTechnique.resolveCollision(this.hashTable, firstHash, surrogateHashNode, this.colMethod);
      if (!wasSuccessfull) {
        message = 'unfortunately item was not inserted';
      } else {
        surrogateHashNode.attempts = wasSuccessfull;
        this.quantity++;
      }
    } else {
      surrogateHashNode.position = firstHash;
      this.hashTable[firstHash] = surrogateHashNode;
      this.quantity++;
    }
    this._isRehashingNeeded();
  } else {
    const newSinglyNode = new SinglyNode(data);
    if (isCollision) {
      this.hashTable[firstHash].addFromEnd(newSinglyNode);
    } else {
      this.hashTable[firstHash] = new SinglyLinkedList(newSinglyNode);
    }
    this.quantity++;
  }
  // see if resizing is needed
  return message;
};
HashTableES5.prototype.remove = function(key) {
  let nodeToRemove = undefined;
  let removedData = undefined;

  if (this.colMethod !== CollisionTechnique.techniques.CHAINING) {
    nodeToRemove = this.search(key);
    if (nodeToRemove) {
      this.hashTable[nodeToRemove.position] = undefined;
      removedData = nodeToRemove.content;
      nodeToRemove.data = undefined;
      this.quantity--;
    }
  } else {
    this._removeChaining(key);
  }

  return removedData;
};
HashTableES5.prototype._removeChaining = function(key) {
  const hash = this._firstLevelHashFunction(key);
  let singlyList = this.hashTable[hash];
  let nodeToRemove = undefined;
  let removedData = undefined;

  if (singlyList) {
    if (singlyList.getQuantity() === 1) {
      if (singlyList.getHead().getData() === key) {
        removedData = singlyList.getHead().getData();
        singlyList.decrement();
        this.hashTable[hash] = undefined;
        this.quantity--;
      }
    } else {
      let previousNode = singlyList.findPrevious(new SinglyNode(key));
      if (previousNode) {
        nodeToRemove = previousNode.getNext();
        removedData = nodeToRemove.getData();
        previousNode.setNext(nodeToRemove.getNext());
        this.quantity--;
        singlyList.decrement();
      }
    }
  }
  return removedData;
};
HashTableES5.prototype.search = function(key) {
  // get and make it go throuh a hash function
  const firstHash = this._firstLevelHashFunction(key);
  // access that cell,
  if (this.hashTable[firstHash]) {
    if (this.colMethod !== CollisionTechnique.techniques.CHAINING) {
      if (key === this.hashTable[firstHash].content) {
        return this.hashTable[firstHash];
      }
      return CollisionTechnique.searchingProcess(key, firstHash, this.hashTable);
    } else {
      const nodeFound = this.hashTable[firstHash].findNode(key);
      if (nodeFound) {
        return nodeFound.getData();
      }
    }
  }
  // if its not the content that you were looking for
  return 'not found';
};

HashTableES5.prototype._isCollision = function(hash) {
  if (hash < this.currentCapacity && this.hashTable[hash] === undefined) {
    return false;
  }
  return true;
};
HashTableES5.prototype.getQuantity = function() {
  return this.quantity;
}
HashTableES5.prototype.getCapacity = function() { return this.currentCapacity };
HashTableES5.prototype._resize = function(factor) {
  this.currentCapacity *= factor;
  const auxArray = new Array(this.currentCapacity);
  let current = 0;
  while (current < this.hashTable.length) {
    auxArray[current] = this.hashTable[current];
    current++;
  }
  this.hashTable = auxArray;
}
HashTableES5.prototype._firstLevelHashFunction = function(key) {
  return ((2 * key) + 3) % this.hashTable.length;
}
HashTableES5.prototype._secondLevelHashFunction = function(key) { return ((3 * key) + 1) % this.hashTable.length };
HashTableES5.prototype._getLoadFactor = function() {
  return (this.quantity / this.currentCapacity);
}
HashTableES5.prototype._isRehashingNeeded = function() {
  if (this._getLoadFactor() > this.MAX_CAPACITY) {
    this._resize(2);
  }
};
HashTableES5.prototype._isUnderHashingNeeded = function() {
  if (this._getLoadFactor() < this.MIN_CAPACITY) {
    this._resize(0.5);
  }
};

HashTableES5.prototype.printHelper = function() {
  let str = '';
  let auxStr = '';
  if (this.colMethod !== CollisionTechnique.techniques.CHAINING) {
    for (node of this.hashTable) {
      if (node) {
        str += `${node.content} `;
      } else {
        str += 'undefined ';
      }
    }
  } else {
    for (node of this.hashTable) {
      if (node) {
        str += node.printList() + '\n';
      } else {
        str += 'undefined' + '\n';
      }
    }
  }
  str = str.trim() + '.';
  return str;
};

module.exports = HashTableES5;
