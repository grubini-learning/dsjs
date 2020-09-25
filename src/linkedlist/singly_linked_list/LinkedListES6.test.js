const { expect } = require('chai');
const LinkedListES6 = require('./LinkedListES6');
const SinglyNode = require('./SinglyNode');

describe('test singly ES6 LinkedList', () => {
  let auxLLES6;
  beforeEach(() => {
    auxLLES6 = new LinkedListES6(new SinglyNode(1));
  });
  it('should return Empty List', () => {
    auxLLES6.removeAtEnd();
   expect(auxLLES6.removeAtEnd()).to.equal('Empty List');
  })
  it('should have a quantity of one', () => {
    expect(auxLLES6.getQuantity()).to.equal(1);
  });
  it('should have 1 as the data for its head', () => {
    expect(auxLLES6.getHead().data).to.equal(1);
  })
  it('should allow to add from the beginning', () => {
    expect(auxLLES6.addAtBeginning(new SinglyNode(2))).to.equal(undefined)
  });
  it('should have a head of two', () => {
    auxLLES6.addAtBeginning(new SinglyNode(2));
    const output = auxLLES6.getHead();
    expect(output.data).to.equal(2);
  })
  it('should have a tail of 1', () => {
    auxLLES6.addAtBeginning(new SinglyNode(2));
    const output = auxLLES6.getTail();
    expect(output.data).to.equal(1);
  });
  it('should have a tail of three', () => {
    auxLLES6.addAtBeginning(new SinglyNode(2));
    auxLLES6.addAtEnd(new SinglyNode(3));
    expect(auxLLES6.getTail().data).to.equal(3);
  });
  it('should be three in the middle', () => {
    auxLLES6.addAtEnd(new SinglyNode(2));
    auxLLES6.addAfter(1, new SinglyNode(3));
    expect(auxLLES6.printList()).to.equal('1 <-- 3 <-- 2 <-- ');
  });
  it('should be 3 <-- 2 <-- ', () => {
    auxLLES6.addAtEnd(new SinglyNode(2));
    auxLLES6.addAfter(1, new SinglyNode(3));
    auxLLES6.removeAtBeginning();
    expect(auxLLES6.printList()).to.equal('3 <-- 2 <-- ');
  });
  it('should return 1', () => {
    auxLLES6.addAtEnd(new SinglyNode(2));
    auxLLES6.addAfter(1, new SinglyNode(3));
    const output = auxLLES6.removeAtBeginning();
    expect(output.getData()).to.equal(1);
  });
  it('should return 3', () => {
    auxLLES6.addAtEnd(new SinglyNode(2));
    auxLLES6.addAtEnd(new SinglyNode(3));
    const output = auxLLES6.removeAtEnd();
    expect(output.getData()).to.equal(3);
  });
  it('should be 1 <-- 2 <-- ', () => {
    auxLLES6.addAtEnd(new SinglyNode(2));
    auxLLES6.addAtEnd(new SinglyNode(3));
    auxLLES6.removeAtEnd();
    expect(auxLLES6.printList()).to.equal('1 <-- 2 <-- ');
  });
  it('should return 3 after removing after 2', () => {
    auxLLES6.addAtEnd(new SinglyNode(1));
    auxLLES6.addAtEnd(new SinglyNode(2));
    auxLLES6.addAtEnd(new SinglyNode(3));
    auxLLES6.addAtEnd(new SinglyNode(4));
    expect(auxLLES6.removeAfter(2).getData()).to.equal(3);
  });
  it('should return 3 after removing after 2', () => {
    auxLLES6.addAtEnd(new SinglyNode(2));
    auxLLES6.addAtEnd(new SinglyNode(3));
    auxLLES6.addAtEnd(new SinglyNode(4));
    auxLLES6.removeAfter(2);
    expect(auxLLES6.printList()).to.equal('1 <-- 2 <-- 4 <-- ');
  });
});
//so, in twiddler I was able to do a db, a back end, and the app now renders the messages in the db and you can create messages as well and also adds them in the saga of tweets the user made