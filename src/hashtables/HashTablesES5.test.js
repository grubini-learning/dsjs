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
    expect(auxHashTable.getCapacity()).to.equal(20);
  });
});