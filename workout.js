class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1,vertex2){
        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    }

    bfs(vertex){
        let visited={}
        let queue=[]
        queue.push(vertex)
        visited[vertex]=true
        while(queue.length){
            let cur=queue.shift()
            console.log(cur)
            this.adjacencyList[cur].forEach(vertex=>{
                if(!visited[vertex]){
                    visited[vertex]=true
                    queue.push(vertex)
                }
            })
        }
    }

    dfs(vertex){
        let visited={}
        let dfsRecursive=(vertex)=>{
            visited[vertex]=true
            console.log(vertex)
            this.adjacencyList[vertex].forEach(item=>{
                if(!visited[item]){
                    dfsRecursive(item)
                }
            })
        }
        dfsRecursive(vertex)
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex])return
        for(let adjacency of this.adjacencyList[vertex]){
            this.removeEdge(adjacency,vertex)
        }
        delete this.adjacencyList[vertex]
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+'--->'+[...this.adjacencyList[vertex]])
        }
    }
}
const graph = new Graph()
// graph.addvertex('a')
// graph.addvertex('b')
// graph.addvertex('c')
// graph.addedge('a','b')
// graph.addedge('b','c')
// // graph.removeEdge('b','c')
// console.log(graph.hasEdge('a','c'))
// // graph.removeVertex('b')
graph.display()
// graph.dfs('b')


//test

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
graph.addEdge('A', 'E');

console.log('BFS:');
graph.bfs('A');

console.log('\nDFS:');
graph.dfs('A');

graph.display()