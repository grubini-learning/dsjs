const { expect } = require('chai');
const HashTableES5 = require('./HashTablesES5');
const HashingMethod = require('./HashingMethod');
const CollisionTechnique = require('./CollisionTechnique');

describe('HashTable ES5 methods', () => {
  const MAX_ALLOWED_CAPACITY = 0.75;
  const MIN_ALLOWED_CAPACITY = 0.35;

  let auxHashTable;
  const sampleData = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10];
  beforeEach(() => {
    auxHashTable = new HashTableES5(MAX_ALLOWED_CAPACITY, MIN_ALLOWED_CAPACITY, 10, HashingMethod.methods.DIVISION, CollisionTechnique.techniques.LINEAR_PROBING);
  });
  afterEach(() => {
    auxHashTable = null;
  })

  it('inserts and increments the quantity by one', () => {
    auxHashTable.insert('0');
    expect(auxHashTable.getQuantity()).to.equal(1);
  });
  it('expects to have 1, 2, 3', () => {
    auxHashTable.insert(1);
    auxHashTable.insert(2);
    auxHashTable.insert(3);
    expect(auxHashTable.getQuantity()).to.equal(3);
  });
  it('should resize after adding the 8th value to 20', () => {
    auxHashTable.insert(3);
    auxHashTable.insert(2);
    auxHashTable.insert(9);
    auxHashTable.insert(6);
    auxHashTable.insert(11);
    auxHashTable.insert(13);
    auxHashTable.insert(7);
    auxHashTable.insert(12);
    console.log(auxHashTable.printHelper());
    expect(auxHashTable.getCapacity()).to.equal(20);
  });
  it('should resize after adding the 8th value to 20', () => {
    auxHashTable.insert(3);
    auxHashTable.insert(2);
    auxHashTable.insert(9);
    auxHashTable.insert(6);
    auxHashTable.insert(11);
    auxHashTable.insert(13);
    auxHashTable.insert(7);
    auxHashTable.insert(12);
    auxHashTable.insert(1);
    console.log(auxHashTable.printHelper());
    expect(auxHashTable.getCapacity()).to.equal(20);
  });
  it('Quadratic hash method should resize after adding the 8th value to 20', () => {
    aux1HashTable = new HashTableES5(MAX_ALLOWED_CAPACITY, MIN_ALLOWED_CAPACITY, 10, HashingMethod.methods.DIVISION, CollisionTechnique.techniques.QUADRATIC_PROBING);
    aux1HashTable.insert(3);
    aux1HashTable.insert(2);
    aux1HashTable.insert(9);
    aux1HashTable.insert(6);
    aux1HashTable.insert(11);
    aux1HashTable.insert(13);
    aux1HashTable.insert(7);
    aux1HashTable.insert(12);
    console.log(aux1HashTable.printHelper());
    expect(aux1HashTable.getCapacity()).to.equal(20);
  });
  it('Double Hash technique should resize after adding the 8th value to 10', () => {
    aux2HashTable = new HashTableES5(MAX_ALLOWED_CAPACITY, MIN_ALLOWED_CAPACITY, 10, HashingMethod.methods.DIVISION, CollisionTechnique.techniques.DOUBLE_HASHING);
    aux2HashTable.insert(3);
    aux2HashTable.insert(2);
    aux2HashTable.insert(9);
    aux2HashTable.insert(6);
    aux2HashTable.insert(11);
    aux2HashTable.insert(13);
    aux2HashTable.insert(7);
    aux2HashTable.insert(12);
    console.log(aux2HashTable.printHelper());
    expect(aux2HashTable.getCapacity()).to.equal(10);
  });
});