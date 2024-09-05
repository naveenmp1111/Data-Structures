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