const { expect } = require('chai');
const LinkedListES5 = require('./LinkedListES5');
const SinglyNode = require('./SinglyNode');

describe('test singly ES5 LinkedList', () => {
  let auxLLES5;
  beforeEach(() => {
    auxLLES5 = new LinkedListES5(new SinglyNode(1));
  });
  it('should return Empty List', () => {
    auxLLES5.removeFromEnd();
   expect(auxLLES5.removeFromEnd()).to.equal('Empty List');
  })
  it('should have a quantity of one', () => {
    expect(auxLLES5.getQuantity()).to.equal(1);
  });
  it('should have 1 as the data for its head', () => {
    expect(auxLLES5.getHead().data).to.equal(1);
  })
  it('should allow to add from the beginning', () => {
    expect(auxLLES5.addFromBeginning(new SinglyNode(2))).to.equal(undefined)
  });
  it('should have a head of two', () => {
    auxLLES5.addFromBeginning(new SinglyNode(2));
    const output = auxLLES5.getHead();
    expect(output.data).to.equal(2);
  })
  it('should have a tail of 1', () => {
    auxLLES5.addFromBeginning(new SinglyNode(2));
    const output = auxLLES5.getTail();
    expect(output.data).to.equal(1);
  });
  it('should have a tail of three', () => {
    auxLLES5.addFromBeginning(new SinglyNode(2));
    auxLLES5.addFromEnd(new SinglyNode(3));
    expect(auxLLES5.getTail().data).to.equal(3);
  });
  it('should be three in the middle', () => {
    auxLLES5.addFromEnd(new SinglyNode(2));
    auxLLES5.addAfter(1, new SinglyNode(3));
    expect(auxLLES5.printList()).to.equal('1 <-- 3 <-- 2 <-- ');
  });
  it('should be 3 <-- 2 <-- ', () => {
    auxLLES5.addFromEnd(new SinglyNode(2));
    auxLLES5.addAfter(1, new SinglyNode(3));
    auxLLES5.removeFromBeginning();
    expect(auxLLES5.printList()).to.equal('3 <-- 2 <-- ');
  });
  it('should return 1', () => {
    auxLLES5.addFromEnd(new SinglyNode(2));
    auxLLES5.addAfter(1, new SinglyNode(3));
    const output = auxLLES5.removeFromBeginning();
    expect(output.getData()).to.equal(1);
  });
  it('should return 3', () => {
    auxLLES5.addFromEnd(new SinglyNode(2));
    auxLLES5.addFromEnd(new SinglyNode(3));
    const output = auxLLES5.removeFromEnd();
    expect(output.getData()).to.equal(3);
  });
  it('should be 1 <-- 2 <-- ', () => {
    auxLLES5.addFromEnd(new SinglyNode(2));
    auxLLES5.addFromEnd(new SinglyNode(3));
    auxLLES5.removeFromEnd();
    expect(auxLLES5.printList()).to.equal('1 <-- 2 <-- ');
  });
  it('should return 3 after removing after 2', () => {
    auxLLES5.addFromEnd(new SinglyNode(1));
    auxLLES5.addFromEnd(new SinglyNode(2));
    auxLLES5.addFromEnd(new SinglyNode(3));
    auxLLES5.addFromEnd(new SinglyNode(4));
    expect(auxLLES5.removeAfter(2).getData()).to.equal(3);
  });
  it('should return 3 after removing after 2', () => {
    auxLLES5.addFromEnd(new SinglyNode(2));
    auxLLES5.addFromEnd(new SinglyNode(3));
    auxLLES5.addFromEnd(new SinglyNode(4));
    auxLLES5.removeAfter(2);
    expect(auxLLES5.printList()).to.equal('1 <-- 2 <-- 4 <-- ');
  });
});
//so, in twiddler I was able to do a db, a back end, and the app now renders the messages in the db and you can create messages as well and also adds them in the saga of tweets the user made