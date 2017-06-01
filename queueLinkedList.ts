module Queue{
class node {
    public data;
    public next = null;
    constructor(value) {
        this.data = value;
    }
}

class QLinkedList {
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
    deQueue() {
        let deletedNode;
        if (this.index == 1) {
            this.index=0;
            deletedNode = this.head;
            this.head = null;
            return deletedNode;

        } else {
            deletedNode = this.head;
            this.head = deletedNode.next;
             this.index++;
             return deletedNode;
        }
    }

    peekNode() {
        return this.head;
    }
       
}

let l1 = new QLinkedList();
debugger;
l1.addList(10)
l1.addList(20);
l1.addList(30);
l1.addList(40);
l1.addList(50);
l1.deQueue();
console.log(l1.peekNode());
}