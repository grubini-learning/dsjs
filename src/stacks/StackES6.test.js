const { expect } = require('chai');
const StackES6 = require('./StackES6');

describe('testing a ES6 Stack', () => {
  let auxStack;
  const sampleTest = [123, 54, 876, 923, 206];
  beforeEach(() => {
    auxStack = new StackES6(6);
    sampleTest.forEach(item => auxStack.push(item));
  });

  it('should have a size of 5', () => {
    expect(auxStack.getSize()).to.equal(5);
  });
  it('should have a top value of 206', () => {
    expect(auxStack.peek()).to.equal(206);
  });
  it('should it should say the stack is full', () => {
    auxStack.push(621);
    auxStack.push(412);
    expect(auxStack.push(321)).to.equal('Stack is full');
  });
  it('the number popped should be 923', () => {
    auxStack.pop();
    expect(auxStack.pop()).to.equal(923);
  });
  it('should print Stack is Empty', () => {
    auxStack.pop();
    auxStack.pop();
    auxStack.pop();
    auxStack.pop();
    auxStack.pop();
    expect(auxStack.pop()).to.equal('Stack is Empty');
  });
});