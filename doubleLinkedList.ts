module double {
    class node {
        public data;
        public next = null;
        public prev = null;
        constructor(value) {
            this.data = value;
        }
    }

    class DobuleLinkedList {
        public head;
        private current;
        private index = 0;
        constructor() {

        }
        addList(value) {
            let newNode = new node(value);

            if (!this.head) {
                this.head = newNode;
            } else {
                this.current.next = newNode;
                newNode.prev = this.current

            }
            this.current = newNode;
            this.index++;

        }
        delete(index) {
            let deletedNode;
            if (index <= this.index) {
                if (index == 1) {
                    deletedNode = this.head.next;
                    this.head = this.head.next;
                    this.head.prev = null;
                    this.index--;
                    return deletedNode;

                } else {
                    let goingToDeleteNode = this.head;
                    let prevNode;
                    let pos = 1;
                    while (pos < index) {
                        prevNode = goingToDeleteNode;
                        goingToDeleteNode = goingToDeleteNode.next;
                        pos++;
                    }
                    this.index--;
                    prevNode.next = goingToDeleteNode.next;
                    goingToDeleteNode.next.prev = prevNode
                    return goingToDeleteNode;
                }
            } else {
                console.log('out of box');
            }

        }
        searchNode(index) {
            let findNode;
            if (index <= this.index) {
                if (index == 1) {
                    return findNode.data;

                } else {
                    findNode = this.head;
                    let pos = 1;
                    while (pos < index) {
                        findNode = findNode.next;
                        pos++;
                    }
                    return findNode.data;
                }
            } else {
                console.log('out of box');
            }
        }
    }

    let l1 = new DobuleLinkedList();
    debugger;
    l1.addList(10)
    l1.addList(20);
    l1.addList(30);
    l1.delete(2);
    console.log(l1.searchNode(2));
}