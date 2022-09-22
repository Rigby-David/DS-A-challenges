const { BinaryTreeNode } = require('.');

describe('node based data structures', () => {
  it('should return a binary tree', () => {
    const B = new BinaryTreeNode('B');
    const A = new BinaryTreeNode('A');
    const C = new BinaryTreeNode('C');
    const D = new BinaryTreeNode('D');

    B.add(A);
    B.add(D);
    B.add(C);
    console.log('B', B);
    console.log('A', A);
    console.log('D binary tree structure', D);
    console.log('C', C);
    console.log('B', B);

    expect(B.left.value).toEqual('A');
    expect(B.right.value).toEqual('D');
  });
});
