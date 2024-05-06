class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(element){
        return this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    size(){
        return this.items.length
    }

    isEmpty(){
        return this.items.length == 0
    }

    peek(){
        return this.items[0]
    }

    print(){
        console.log(this.items.toString())
    }
}

const queue=new Queue()
console.log(queue.isEmpty())
console.log(queue.size())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
queue.dequeue()
console.log(queue.peek())
queue.print()