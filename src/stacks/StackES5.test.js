const { expect } = require('chai');
const StackES5 = require('./StackES5');



describe('testing ES5 stack', () => {
  let auxStack;
  beforeEach(() => {
    auxStack = new StackES5(5);
    auxStack.push(123);
  });

  it('size of stack', () => {
    expect(auxStack.getSize()).to.equal(1);
  });
  it('top element in the stack', () => {
    expect(auxStack.peek()).to.equal(123);
  });
  it('pop element out of stack', () => {
    expect(auxStack.pop()).to.equal(123);
  });
  it('size of empty stack', () => {
    expect(auxStack.pop()).to.equal(123);
    expect(auxStack.getSize()).to.equal(0);
  });

});