class Stack {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  push(item) {
    this.#list.push(item);
  }

  pop() {
    this.#list.pop();
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }

  get list() {
    return this.#list;
  }
}

const newStack = new Stack(['fox', 'goose', 'lizard']);
newStack.push('llama');

module.exports = { Stack };
