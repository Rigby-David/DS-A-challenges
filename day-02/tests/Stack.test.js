const { Stack, reverseArray } = require('../Stack');

describe('Stack', () => {
  it('Push should add a new item to the top of the array', () => {
    const stack = new Stack();

    stack.push('fox');
    expect(stack.list).toEqual(['fox']);
  });
  it('Pop should remove the top item from the stack', () => {
    const stack = new Stack();

    stack.push('fox');
    stack.pop();
    expect(stack.list).toEqual([]);
  });
  it('Peek should return the top item of the stack', () => {
    const stack = new Stack();

    stack.push('fox');
    stack.push('llama');
    stack.push('lizard');
    expect(stack.peek()).toEqual('lizard');
  });
  it('should return a copy of the array with its elements returned in reverse order', () => {
    const stack = new Stack();
    console.log('stack', stack);
    expect(reverseArray(['1', '2', '3'])).toEqual(['3', '2', '1']);
  });
});
