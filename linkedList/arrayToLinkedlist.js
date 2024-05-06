class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    prepend(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    } 

    print() {
        if (!this.head) {
            return null;
        } else {
            let values = '';
            let cur = this.head;
            while (cur) {
                values += `${cur.value} `;
                cur = cur.next;
            }
            return values;
        }
    }
}

function arrayToLinkedList(arr) {
    const linkedList = new LinkedList();
    for (let i = arr.length - 1; i >= 0; i--) {
        linkedList.prepend(arr[i]);
    }
    return linkedList; // Make sure to return the linked list
}

const list = arrayToLinkedList([10, 20, 30, 40, 50]); // Assign the result to the list variable
console.log(list.print());
