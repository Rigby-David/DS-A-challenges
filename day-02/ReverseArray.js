class Stack {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  reverse() {
    this.#list.reverse();
  }

  push(item) {
    this.#list.push(item);
  }

  get list() {
    return this.#list;
  }
}

module.exports = { Stack };
