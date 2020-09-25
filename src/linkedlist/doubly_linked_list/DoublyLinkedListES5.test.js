const { expect } = require('chai');
const DoublyLinkedListES5 = require('./DoublyLinkedListES5');
const DoublyNode = require('./DoublyNode');

describe('test doubly ES5 list', () => {
  let auxDLLES5;
  beforeEach(() => {
    auxDLLES5 = new DoublyLinkedListES5(new DoublyNode(1));
  });

  it('should have a quantity of 1', () => {
    expect(auxDLLES5.getQuantity()).to.equal(1);
  });
  it('should have 2 at its head', () => {
    auxDLLES5.addAtFront(new DoublyNode(2));
    expect(auxDLLES5.getHead().getData()).to.equal(2);
  });
  it('should be 2 <-- 1 <-- when added at the front', () => {
    auxDLLES5.addAtFront(new DoublyNode(2));
    expect(auxDLLES5.printList()).to.equal('2 <-- 1 <-- ');
  });
  it('should be 2 <-- 3 <-- 1 <-- when added after', () => {
    auxDLLES5.addAtFront(new DoublyNode(2));
    auxDLLES5.addAfter(2, new DoublyNode(3));
    expect(auxDLLES5.printList()).to.equal('2 <-- 3 <-- 1 <-- ');
  });
  it('should be 2 <-- 3 <-- when removed at the end', () => {
    auxDLLES5.addAtFront(new DoublyNode(2));
    auxDLLES5.addAfter(2, new DoublyNode(3));
    auxDLLES5.removeAtEnd();
    expect(auxDLLES5.printList()).to.equal('2 <-- 3 <-- ');
  });
  it('removes 3 out of 2 <-- 4 <-- 3 <-- 1 <-- ', () => {
    auxDLLES5.addAtFront(new DoublyNode(2));
    auxDLLES5.addAfter(2, new DoublyNode(4));
    auxDLLES5.addAfter(4, new DoublyNode(3));
    auxDLLES5.removeAfter(4);
    expect(auxDLLES5.printList()).to.equal('2 <-- 4 <-- 1 <-- ');
  });
  it('removes after 5 returning 3', () => {
    auxDLLES5.addAtFront(new DoublyNode(2));
    auxDLLES5.addAfter(2, new DoublyNode(4));
    auxDLLES5.addAfter(4, new DoublyNode(3));

    expect(auxDLLES5.removeAfter(4).getData()).to.equal(3);
  });
  it('removes 2 at front', () => {
    auxDLLES5.addAtFront(new DoublyNode(2));
    auxDLLES5.addAfter(2, new DoublyNode(4));
    auxDLLES5.addAfter(4, new DoublyNode(3));
    expect(auxDLLES5.removeAtFront().getData()).to.equal(2);
  })
});
