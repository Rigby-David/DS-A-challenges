const { BinaryTreeNode, PersonTreeNode } = require('.');

describe('node based data structures', () => {
  it('should return a binary tree', () => {
    const B = new BinaryTreeNode('B');
    const A = new BinaryTreeNode('A');
    const C = new BinaryTreeNode('C');
    const D = new BinaryTreeNode('D');

    B.add(A);
    B.add(D);
    B.add(C);

    expect(B.left.value).toEqual('A');
    expect(B.right.value).toEqual('D');
  });
  it('should return a person node', () => {
    const Jones = new PersonTreeNode({
      name: 'Jones',
      phone: '555-1212',
      address: '123 Main St',
    });
    const Brook = new PersonTreeNode({
      name: 'Brook',
      phone: '555-1212',
      address: '123 Main St',
    });
    const Smith = new PersonTreeNode({
      name: 'Smith',
      phone: '555-1212',
      address: '123 Main St',
    });
    const Nelson = new PersonTreeNode({
      name: 'Nelson',
      phone: '555-1212',
      address: '123 Main St',
    });

    Jones.add(Brook);
    Jones.add(Smith);
    Jones.add(Nelson);
    console.log('Jones', Jones);
    Jones.findPerson('Brook');
    Jones.findPerson('Smith');

    expect(Jones.findPerson('Brook')).toEqual({
      name: 'Brook',
      phone: '555-1212',
      address: '123 Main St',
    });

    expect(Jones.left.value).toEqual('Brook');
    expect(Jones.right.value).toEqual('Smith');
    expect(Jones.right.left.value).toEqual('Nelson');
  });
});
