class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }

    append(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
            return
        }else{
            let cur=this.head
            while(cur.next){
                cur=cur.next
            }
            cur.next=node
        }
    }

    

    display(){
        if(this.head){
            let cur=this.head
        while(cur){
            console.log(cur.value)
            cur=cur.next
        }
        }else {
            return -1
        }   
    }
}
const list=new LinkedList()

list.append(10)
list.append(20)
list.append(40)
list.append(30)
list.append(50)
// list.reverse()
list.display()