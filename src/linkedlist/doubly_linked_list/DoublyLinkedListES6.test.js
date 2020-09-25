const { expect } = require('chai');
const DoublyLinkedListES6 = require('./DoublyLinkedListES6');
const DoublyNode = require('./DoublyNode');

describe('test doubly ES6 list', () => {
  let auxDLLES6;
  beforeEach(() => {
    auxDLLES6 = new DoublyLinkedListES6(new DoublyNode(1));
  });

  it('should have a quantity of 1', () => {
    expect(auxDLLES6.getQuantity()).to.equal(1);
  });
  it('should have 2 at its head', () => {
    auxDLLES6.addAtFront(new DoublyNode(2));
    expect(auxDLLES6.getHead().getData()).to.equal(2);
  });
  it('should be 2 <-- 1 <-- when added at the front', () => {
    auxDLLES6.addAtFront(new DoublyNode(2));
    expect(auxDLLES6.printList()).to.equal('2 <-- 1 <-- ');
  });
  it('should be 2 <-- 3 <-- 1 <-- when added after', () => {
    auxDLLES6.addAtFront(new DoublyNode(2));
    auxDLLES6.addAfter(2, new DoublyNode(3));
    expect(auxDLLES6.printList()).to.equal('2 <-- 3 <-- 1 <-- ');
  });
  it('should be 2 <-- 3 <-- when removed at the end', () => {
    auxDLLES6.addAtFront(new DoublyNode(2));
    auxDLLES6.addAfter(2, new DoublyNode(3));
    auxDLLES6.removeAtEnd();
    expect(auxDLLES6.printList()).to.equal('2 <-- 3 <-- ');
  });
  it('removes 3 out of 2 <-- 4 <-- 3 <-- 1 <-- ', () => {
    auxDLLES6.addAtFront(new DoublyNode(2));
    auxDLLES6.addAfter(2, new DoublyNode(4));
    auxDLLES6.addAfter(4, new DoublyNode(3));
    auxDLLES6.removeAfter(4);
    expect(auxDLLES6.printList()).to.equal('2 <-- 4 <-- 1 <-- ');
  });
  it('removes after 5 returning 3', () => {
    auxDLLES6.addAtFront(new DoublyNode(2));
    auxDLLES6.addAfter(2, new DoublyNode(4));
    auxDLLES6.addAfter(4, new DoublyNode(3));

    expect(auxDLLES6.removeAfter(4).getData()).to.equal(3);
  });
  it('removes 2 at front', () => {
    auxDLLES6.addAtFront(new DoublyNode(2));
    auxDLLES6.addAfter(2, new DoublyNode(4));
    auxDLLES6.addAfter(4, new DoublyNode(3));
    expect(auxDLLES6.removeAtFront().getData()).to.equal(2);
  })
});
