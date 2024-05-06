class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value)
        if (!this.root) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (!root.left) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (!root.right) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return null
        } else {
            if (root.value == value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preorder(root) {
        if (root) {
            console.log(root.value)
            console.log('mmmmmmmmmmmmmm')
            this.preorder(root.left)
            console.log('??????????')
            this.preorder(root.right)
        }
    }

    inorder(root) {
        if (root) {
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }

    postorder(root) {
        if (root) {
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value)
        }
    }

    bfs() {
        const queue = {}
        let front = 0
        let rear = 0
        queue[rear] = this.root
        rear++

        while (rear - front != 0) {
            let cur = queue[front]
            delete queue[front]
            front++
            console.log(cur.value)
            if (cur.left) {
                queue[rear] = cur.left
                rear++
                // queue.push(cur.left)
            }
            if (cur.right) {
                queue[rear] = cur.right
                rear++
                // queue.push(cur.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return root
        } else if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        }else{
            if(!root.left && !root.right){
                return null
            }else if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }else{
                root.value=this.min(root.right)
                root.right=this.deleteNode(root.right,root.value)
            }
        }
        return root
    }

    isValid(root,min=null,max=null){
        if(!root){
            return true
        }
        if((min!=null && root.value <= min) || (max!=null && root.value >=max)){
            return false
        }

        return (this.isValid(root.left,min,root.value) && (this.isValid(root.right,root.value,max)))
    }
}
const bst = new binarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
// bst.delete(7)
// bst.insert(6)
// bst.insert(8)
bst.preorder(bst.root)
// bst.inorder(bst.root)
// bst.postorder(bst.root)
// bst.bfs()
// console.log(bst.max(bst.root))0.
// console.log(bst.search(bst.root, 7))
console.log('------------')
// console.log(bst.isValid(bst.root))
