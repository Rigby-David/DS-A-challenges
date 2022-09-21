const { Stack } = require('./Stack');

class Queue {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    return this.#list.shift();
  }

  hasNext() {}

  get list() {
    return this.#list;
  }
}

const newStack = new Stack(['fox', 'goose', 'lizard']);
newStack.push('llama');

module.exports = { Queue };
