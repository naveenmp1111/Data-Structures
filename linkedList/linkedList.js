class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    size() {
        if (!this.head) {
            return null
        }
        let count = 0
        let cur = this.head
        while (cur) {
            count++
            cur = cur.next
        } return count
    }

    print() {
        if (!this.head) {
            return null
        }
        let cur = this.head
        let values = ''
        while (cur) {
            values += `${cur.value} `
            cur = cur.next
        } return values
    }

    append(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
        } else {
            let cur = this.head
            while (cur.next) {
                cur = cur.next
            }
            cur.next = node
        }
        return
    }

    prepend(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
    }

    insert(index, value) {
        if (index < 0 || index > this.size()) {
            return null
        }
        if (index == 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            return
        }
    }

    // search(index){
    //     if(index<0 || index>this.size()){
    //         return null
    //     }else{
    //         let cur=this.head
    //         for(let i=0;i<index;i++){
    //             cur=cur.next
    //         }
    //         return cur.value
    //     }
    // }

    search(value) {
        let cur = this.head
        let i = 0
        while (cur.value != value) {
            cur = cur.next
            i++
        }
        if (cur.value == value) {
            return i
        }
        return null
    }

    removeValueFromIndex(index) {
        if (index < 0 || index >= this.size()) {
            return null
        } else if (index == 0) {
            this.head = this.head.next
            return
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            let cur = prev.next
            prev.next = cur.next
            return
        }

    }

    removeValue(value) {
        if (!this.head) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
        }
        let cur = this.head
        while (cur.next && cur.next.value != value) {
            cur = cur.next
        }
        if (cur.next) {
            let prev = cur.next
            cur.next = prev.next
            return
        }
        return null
    }

    reverse() {
        if (!this.head) {
            return null
        }
        let prev = null
        let cur = this.head
        while (cur) {
            let next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }
        this.head = prev
        return
    }

    hasCycles(){
        if(!this.head){
            return false
        }else{
            let slow=this.head
            let fast=this.head
            while(fast.next && fast.next.next){
                fast=fast.next.next
                slow=slow.next
                if(fast==slow){
                    return true
                }
            }
            return false
        }
    }
}



const list = new LinkedList()
console.log(list.print())
console.log(list.size())
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.prepend(9)
list.insert(3, 15)
console.log('size is' + list.size())
console.log('Index of the value is : ' + list.search(30))
// console.log(list.search(0))
// console.log(list.removeValueFromIndex(7))
console.log(list.print())
console.log(list.removeValue(50))
console.log(list.print())
// list.reverse()
console.log(list.print())