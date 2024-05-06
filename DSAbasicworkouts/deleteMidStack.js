class Stack{
    constructor(){
        this.items=[]
        
    }
    delete(){
       return this.items.pop()
    }

    insert(element){
        this.items.push(element)
    }

    middle(){
        let index=Math.floor(this.items.length/2)
        return index
    }

    display(){
       console.log(this.items)
    }

    size(){
        return this.items.length
    }
    
}

const stack=new Stack()
const newstack=new Stack()
stack.insert(10)
stack.insert(20)
stack.insert(30)
stack.insert(40)
stack.insert(50)
stack.display()
let middle=stack.middle()
for(let i=0;i<middle;i++){
    newstack.insert(stack.delete())
}
newstack.display()
stack.delete()
stack.display()
for(let i=0;i<=newstack.size();i++){
    stack.insert(newstack.delete())
}
console.log('result is :')
stack.display()

