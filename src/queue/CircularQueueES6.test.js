const { expect } = require('chai');
const CircularQueueES6 = require('./CircularQueueES6');

describe('Circular queue ES6', () => {
  let auxCircularQES6;
  beforeEach(() => {
    auxCircularQES6 = new CircularQueueES6(2);
    auxCircularQES6.enqueue(45);
    auxCircularQES6.enqueue(55);
  });

  it('should have a quantity of two', () => {
    expect(auxCircularQES6.getQuantity()).to.equal(2);
  });
  it('should return Overflow', () => {
    expect(auxCircularQES6.enqueue(123)).to.equal('Overflow')
  });
  it('should dequeue 45', () => {
    expect(auxCircularQES6.dequeue()).to.equal(45);
  });
  it('should declare Underflow', () => {
    auxCircularQES6.dequeue();
    auxCircularQES6.dequeue();
    expect(auxCircularQES6.dequeue()).to.equal('Underflow');
  });
  it('should be 55 what it returns', () => {
    auxCircularQES6.dequeue();
    expect(auxCircularQES6.dequeue()).to.equal(55);
  });
  it('should have this as its queue 45 <-- 55 <-- ', () => {
    expect(auxCircularQES6.printElements()).to.equal('45 <-- 55 <-- ');
  });
  it('should.equal 45 the front element after printing', () => {
    auxCircularQES6.printElements();
    expect(auxCircularQES6.dequeue()).to.equal(45);
  });
})