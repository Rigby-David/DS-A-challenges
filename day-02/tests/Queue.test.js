const { Queue } = require('../Queue');

describe('Queue', () => {
  it('Enqueue should take an item and add an item to the back of the stack', () => {
    const que = new Queue();

    que.enqueue('fox');
    que.enqueue('goose');
    que.enqueue('lizard');
    expect(que.list).toEqual(['fox', 'goose', 'lizard']);
  });
  it('dequeue should return an item and remove an item from the front of the stack(line)', () => {
    const que = new Queue();

    console.log('que', que);

    que.enqueue('fox');
    que.enqueue('goose');
    que.enqueue('lizard');
    que.dequeue();
    expect(que.list).toEqual(['goose', 'lizard']);
  });
  it('hasNext returns true or false returns true if there are item(s) in the array and false if returns an empty array', () => {
    const que = new Queue();

    que.enqueue('fox');
    que.enqueue('goose');
    que.dequeue();
    que.dequeue();
    console.log('que.list', que.list);
    expect(que.hasNext()).toBe(false);
    que.enqueue('fox');
    que.enqueue('goose');
    expect(que.hasNext()).toBe(true);
  });
});
