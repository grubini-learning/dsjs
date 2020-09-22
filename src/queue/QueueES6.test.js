const { expect } = require('chai');
const QueueES6 = require('../queue/QueueES6');

describe('ES6  Queue features', () => {
  let auxQueue;
  const sampleData = ['one', 'two', 'three', 'four', 'five', 'six'];
  beforeEach(() => {
    auxQueue = new QueueES6(6);
    sampleData.forEach(item => auxQueue.enqueue(item));
  });

  it('should have a quantity of six items', () => {
    expect(auxQueue.getQuantity()).to.equal(6);
  });
  it('the front element should be one', () => {
    expect(auxQueue.getFront()).to.equal('one');
  });
  it('should return an overflow by enqueing', () => {
    expect(auxQueue.enqueue('seven')).to.equal('Overflow');
  });
  it('should return an underflow', () => {
    auxQueue.dequeue();
    auxQueue.dequeue();
    auxQueue.dequeue();
    auxQueue.dequeue();
    auxQueue.dequeue();
    auxQueue.dequeue();
    auxQueue.dequeue();
    expect(auxQueue.dequeue()).to.equal('Underflow');
  });
});