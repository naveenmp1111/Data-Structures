class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
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
        console.log(count)
        return 
    }

    print(){
        if(!this.head){
            return null
        }
        let cur=this.head
        let values=''
        while(cur){
            values+=`${cur.value} `
            cur=cur.next
        }
        console.log(values)
        return
    }
    
    prepend(value){
        const node=new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            node.next=this.head
            this.head=node
        }return
    }
    append(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        return
    }
    
    removeFromFront(){
        if(!this.head){
            return null
        }else{
            this.head=this.head.next
        }
        return
    }

    removeFromEnd(){
        if(!this.head){
            return null
        }else if(this.size() === 1){
            this.head=null
            this.tail=null
        }else{
            let prev=this.head
            while(prev.next!=this.tail){
                prev=prev.next
            }
            prev.next=null
            this.tail=prev
        }
        return
    }
}

const list=new LinkedList()
list.size()
list.print()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.prepend(2)
list.size()
list.removeFromFront()
list.removeFromEnd()     
list.print()