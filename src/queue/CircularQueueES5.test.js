const { expect } = require('chai');
const CircularQueueES5 = require('./CircularQueueES5');

describe('Circular queue ES5', () => {
  let auxCircularQES5;
  beforeEach(() => {
    auxCircularQES5 = new CircularQueueES5(2);
    auxCircularQES5.enqueue(45);
    auxCircularQES5.enqueue(55);
  });

  it('should have a quantity of two', () => {
    expect(auxCircularQES5.getQuantity()).to.equal(2);
  });
  it('should return Overflow', () => {
    expect(auxCircularQES5.enqueue(123)).to.equal('Overflow')
  });
  it('should dequeue 45', () => {
    expect(auxCircularQES5.dequeue()).to.equal(45);
  });
  it('should declare Underflow', () => {
    auxCircularQES5.dequeue();
    auxCircularQES5.dequeue();
    expect(auxCircularQES5.dequeue()).to.equal('Underflow');
  });
  it('should be 55 what it returns', () => {
    auxCircularQES5.dequeue();
    expect(auxCircularQES5.dequeue()).to.equal(55);
  });
  it('should have this as its queue 45 <-- 55 <-- ', () => {
    expect(auxCircularQES5.printElements()).to.equal('45 <-- 55 <-- ');
  });
  it('should.equal 45 the front element after printing', () => {
    auxCircularQES5.printElements();
    expect(auxCircularQES5.dequeue()).to.equal(45);
  });
})