class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }

    append(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
            this.tail=node
            return
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
    }

    prepend(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.tail.prev=node
            this.head=node
        }
        return
    }

    size(){
        if(!this.head){
            return null
        }
        let cur=this.head
        let count=0
        while(cur){
            count++
            cur=cur.next
        }
        return count
    }

    removeFromFront(){
        if(!this.head){
            return null
        }
        this.head=this.head.next
        return
    }

    removeFromEnd(){
        console.log(this.print())
        if(!this.head){
            return null
        }
        const value=this.tail.value
        if(this.size()==1){
            this.head=null
            this.tail=null
        }else{
            this.tail = this.tail.prev;
        this.tail.next = null;
        }
        return value
    }

    print(){
        if(!this.head){
            return null
        }else{
            let cur=this.head
            let value=''
            while(cur){
                value+=`${cur.value} `
                cur=cur.next
            }
            return value
        }
    }

    insert(index,value){
        const node=new Node(value)
        if(index < 0 || index > this.size()){
            return null
        }else if(index==0){
            node.next=this.head
            this.head.prev=node
            this.head=node
        }else if(index==this.size()){
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }else{
            let cur=this.head
            for(let i=0;i<index-1;i++){
                cur=cur.next
            }
            let nextNode=cur.next
            cur.next=node
            node.prev=cur
            node.next=nextNode
            nextNode.prev=node
        }
        return 
    }

    reverse(){
        let cur=this.tail
        while(cur!=this.head){
            cur=cur.prev
        }
        return 
    }


}

const list =new LinkedList()
console.log(list.print())
console.log('size is : '+list.size())
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(20)
list.prepend(9)
console.log('size is : '+list.size())
// list.removeFromFront()
// console.log(list.removeFromEnd())
// list.insert(7,15)
list.reverse()
console.log(list.print())