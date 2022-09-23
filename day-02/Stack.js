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

function reverseArray(arr) {
  // const arr = [];
  const stack = new Stack();
  for (let i = arr.length - 1; i >= 0; i--) {
    stack.push(arr[i]);
  }
  return stack.list;
  // return reverseArray(arr);
}

const newStack = new Stack(['fox', 'goose', 'lizard']);
newStack.push('llama');

module.exports = { Stack, reverseArray };
