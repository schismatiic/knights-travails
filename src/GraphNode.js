class GraphNode {
  constructor(data = null, adjacencyList = [], previous = null) {
    this.data = data;
    this.adjacencyList = adjacencyList;
    this.previous = previous;
  }
}
export { GraphNode };
