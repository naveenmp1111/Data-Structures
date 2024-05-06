class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail=null
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail= node
        } else {
            this.tail.next=node
            this.tail=node
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

    removeDuplicates(){
        if(!this.head){
            return null
        }
        let cur=this.head
        while(cur && cur.next){
            if(cur.value === cur.next.value){
                let removednode=cur.next
                cur.next=removednode.next
            }else{
                cur=cur.next
            }
        }
    }
}

const sortedList = new LinkedList();
sortedList.append(10);
sortedList.append(20);
sortedList.append(20);
sortedList.append(30);
sortedList.append(40);
sortedList.append(40);
sortedList.append(50);

console.log("Original Linked List:");
console.log(sortedList.print())

sortedList.removeDuplicates();

console.log("Linked List after removing duplicates:");
console.log(sortedList.print())