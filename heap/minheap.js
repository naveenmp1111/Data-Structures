class MinHeap{
    constructor(){
        this.heap=[]
    }

    insert(value){
        this.heap.push(value)
        this.bubbleup()
    }

    bubbleup(){
        let index=this.heap.length-1;

        while(index > 0){
            let parentIndex=Math.floor((index-1)/2)
            if(this.heap[index] >= this.heap[parentIndex]){
                break
            }
            [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
            index=parentIndex
        }
    }

    extractMin(){
        if(this.heap.length==0)return null
        if(this.heap.length==1)return this.heap.pop()

        const min=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapify(0)
        return min
    }

    heapify(index){
        let leftChildIndex= 2*index+1
        let rightChildIndex=2*index+2
        let smallest=index
        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]){
            smallest=leftChildIndex
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]){
            smallest=rightChildIndex
        }
        if(smallest != index){
            [this.heap[index],this.heap[smallest]]=[this.heap[smallest],this.heap[index]]
            this.heapify(smallest)
        }
    }
} 
const minHeap = new MinHeap();
minHeap.insert(4);
minHeap.insert(10);
minHeap.insert(8);
minHeap.insert(5);
minHeap.insert(1);
minHeap.heapify(0)
console.log(minHeap.heap); // Output: [1, 4, 8, 10, 5]
console.log(minHeap.extractMin()); // Output: 1
console.log(minHeap.heap); 