const { Stack } = require('../ReverseArray');

describe('Reverse', () => {
  it('should take in an array and return an array with the same items in reverse order', () => {
    const newReverse = new Stack();

    newReverse.push('fox');
    newReverse.push('lizard');
    newReverse.push('llama');
    console.log('newReverse.list', newReverse.list);
    newReverse.reverse();
    expect(newReverse.list).toEqual(['llama', 'lizard', 'fox']);
  });
});
