module Stack{



class node {
    public data;
    public next = null;
    constructor(value) {
        this.data = value;
    }
}

class StacLinkedList {
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

        }
        this.current = newNode;
        this.index++;

    }
    pop() {
        let deletedNode;
        if (this.index == 1) {
            this.index=0;
            deletedNode = this.head;
            this.head = null;
            return deletedNode;

        } else {
            let goingToDeleteNode = this.head;
            let prevNode;
            let pos = 1;
            while (pos < this.index) {
                prevNode = goingToDeleteNode;
                goingToDeleteNode = goingToDeleteNode.next;
                pos++;
            }
            this.index--;
            prevNode.next = null;
            return goingToDeleteNode;
        }
    }

    peekNode() {
        let findNode;
            if (this.index == 1) {
                return this.head;

            } else {
                findNode = this.head;
                let pos = 1;
                while (pos < this.index) {
                    findNode = findNode.next;
                    pos++;
                }
                return findNode.data;
            }
    }
}

let l1 = new StacLinkedList();
debugger;
l1.addList(10)
l1.addList(20);
l1.addList(30);
l1.addList(40);
l1.addList(50);
l1.pop();
console.log(l1.peekNode());
}