const CollisionTechnique = require('./CollisionTechnique');
const HashNode = require('./HashNode');

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
  let message = 'successfull insertion';
  // if there is a number there, then there is a collision
  if (this._isCollision(firstHash)) {
    const wasSuccessfull = CollisionTechnique.resolveCollision(this.hashTable, firstHash, surrogateHashNode, this.colMethod);
    if (!wasSuccessfull)  {
      message = 'unfortunately item was not inserted';
    } else {
      surrogateHashNode.attempts = wasSuccessfull;
      this.quantity++;
    }
  } else {
    this.hashTable[firstHash] = surrogateHashNode;
    this.quantity++;
  }
  // see if resizing is needed
  this._isRehashingNeeded();
  return message;
};
HashTableES5.prototype.remove = function() {};
HashTableES5.prototype.search = function() {};

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
HashTableES5.prototype.isUnderHashingNeeded = function() {
  if (this._getLoadFactor() < this.MIN_CAPACITY) {
    this._resize(0.5);
  }
};

HashTableES5.prototype.printHelper = function() {
  let str = '';
  let auxStr = '';
  for (node of this.hashTable) {
    if (node) {
      str += `${node.content} `;
    } else {
      str += 'undefined ';
    }
  }
  str = str.trim() + '.';
  return str;
};

// concept, tries to insert object in the array by hashing technique in (division, modulus, multiplication)
// if the spot is taken there is a collision
  // take the collission technique to keep trying until
    // we insert it
    // the number of times we have tried is greater than the length of the hash table
// the hash table can be resized
// it can also remove elements
//it can also search

// open addressing


//Collisions
//===================
  // chaining
    // uses a doubly linked list if collision happens
  // Open Addressing (elements are stored in the hash table itself)
    // Linear Probing h`(k) is a new hash function
      // checks the next slot
      // h`(k, i) = (h(k) + 1) mod m
    // Quadratic Probing
      // spcing is increased
      // h(k, i) = (h`(k) + c1i + c2i^2) mod m

//Hashing Methods
//==============
  // Division
    // k --> key m --> size of table
    // h(k) = k mod m
  // Multiplication
    // c1 and c2
    // A is any constant between 0 and 1 but = (5**.5 / 2)
    // h(k) = floor value m * (kA mod 1)
  //Double hashing
    // h(k, i) = (h1(k) + i * h2(k)) mod m
    // PRIME - (key mod PRIME)

    module.exports = HashTableES5;
