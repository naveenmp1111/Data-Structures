class circularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.size = 0
        this.rear = -1
        this.front = -1
    }

    isFull() {
        return this.capacity === this.size
    }

    isEmpty() {
        return this.rear - this.front == 0
    }

    enQueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.size += 1
            if (this.front == -1) {
                this.front = this.rear
            }
        }
    }

    deQueue() {
        if (this.isEmpty()) {
            return null
        }
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        if (this.isEmpty()) {
            this.rear = -1
            this.front = -1
        }
        this.size -= 1
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }

    print() {
        if (this.isEmpty()) {
            console.log('empty');
        } else {
            console.log(this.rear,this.front)
            let i
            let str = '';
            for (i = this.front; i % this.capacity !== this.rear % this.capacity; i = (i + 1) % this.capacity) {
                str += this.items[i] + ' ';
            }
            str += this.items[i]
            console.log(str);
        }
    }


}

const queue = new circularQueue(5)
console.log(queue.isFull())
console.log(queue.isEmpty())
queue.enQueue(10)
queue.enQueue(50)
queue.enQueue(40)
queue.enQueue(30)
queue.enQueue(20)
queue.deQueue()
queue.print()