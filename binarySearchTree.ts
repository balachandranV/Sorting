module BinarySearchTree {

    class Tree {
        public data;
        public left = null;
        public right = null;
        constructor(val) {
            this.data = val;
        }
    }

    class BSTree {
        public root = null;
        constructor() {

        }
        addingData(data) {
            let tree = new Tree(data);
            if (this.root == null) {
                this.root = tree;
            } else {
                this.addChildTree(this.root, tree);
            }
        }
        addChildTree(root, tree) {

            if (root.data > tree.data) {

                if (root.left == null) {
                    root.left = tree;
                    return;
                } else {
                    this.addChildTree(root.left, tree);
                }

            } else {
                if (root.right == null) {
                    root.right = tree;
                    return;
                } else {
                    this.addChildTree(root.right, tree);
                }
            }

        }

        findingData(val) {
            return this.searchTree(this.root, val);
        }

        searchTree(tree, val, parent?) {
            if (tree == null) {
                return false;
            }
            else if (tree.data == val) {
                return [parent, tree];
            } else if (tree.data > val) {
                return this.searchTree(tree.left, val, tree);
            } else {
                return this.searchTree(tree.right, val, tree);
            }

        }
        removeNode(val) {
            let nodeWithParent = this.searchTree(this.root, val);

            if (nodeWithParent[1].right == null) {

                if (!nodeWithParent[0]) {
                    this.root = nodeWithParent[1];
                    return;
                }

                if (this.isGreater(nodeWithParent[0], nodeWithParent[1])) {
                    nodeWithParent[0].left = nodeWithParent[1].left;
                } else {
                    nodeWithParent[0].right = nodeWithParent[1].left;
                }

            } else if (nodeWithParent[1].right.left == null) {
                if (!nodeWithParent[0]) {
                    this.root = nodeWithParent[1];
                    return;
                }

                nodeWithParent[1].right.left = nodeWithParent[1].left;
                if (this.isGreater(nodeWithParent[0], nodeWithParent[1])) {
                    nodeWithParent[0].left = nodeWithParent[1].right;
                } else {
                    nodeWithParent[0].right = nodeWithParent[1].right;
                }


            } else {
                let leftMostNode = nodeWithParent[1].right.left;
                let parent = nodeWithParent[1].right;
                while (leftMostNode.left != null) {
                    leftMostNode = leftMostNode.left;
                    parent = leftMostNode;
                }

                parent.left = leftMostNode.right;
                leftMostNode.left = nodeWithParent[1].left;
                leftMostNode.right = nodeWithParent[1].right;
                if (!nodeWithParent[0]) {
                    this.root = leftMostNode;
                    return;
                }


                if (this.isGreater(nodeWithParent[0], nodeWithParent[1])) {
                    nodeWithParent[0].left = leftMostNode;
                } else {
                    nodeWithParent[0].right = leftMostNode;
                }


            }

        }

        isLeafNode(node) {
            return !(node.left || node.right);
        }
        isGreater(parent, child) {
            return parent.data > child.data;
        }

        preOrederTraversal() {
            this.processPreOrederTraversal(this.root);

        }
        processPreOrederTraversal(current) {
            if (current) {
                console.log("pre", current.data);
                this.processPreOrederTraversal(current.left);
                this.processPreOrederTraversal(current.right);
            }

        }
        inOrederTraversal() {
            this.processInOrederTraversal(this.root);

        }
        processInOrederTraversal(current) {
            if (current) {

                this.processInOrederTraversal(current.left);
                console.log("pre", current.data);
                this.processInOrederTraversal(current.right);
            }

        }

    }
    debugger;
    let bst = new BSTree();
    bst.addingData(4);
    bst.addingData(2);
    bst.addingData(6);
    bst.addingData(5);
    bst.addingData(7);
    bst.addingData(3);
    bst.addingData(1);
    console.log(bst);
    console.log(bst.findingData(7));
    console.log(bst.findingData(9));

}