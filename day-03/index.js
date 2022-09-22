class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  //this.add(node.left, this.value)
  add(node) {
    if (node.value === this.value) return null;
    if (node.value < this.value) {
      if (this.left == null) {
        this.left = node;
      } else {
        this.left.add(node);
      }
    } else {
      if (this.right == null) {
        this.right = node;
      } else {
        this.right.add(node);
      }
    }
  }
}

module.exports = { BinaryTreeNode };

//const hashmap = Array.from('abcdefghijklmnopqrstuvwxyz');
// const lowercase = node.value.toString().toLowerCase();
// const letterIndex = hashmap.indexOf(lowercase);
