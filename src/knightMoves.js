import { GraphNode } from "./GraphNode.js";
import { LinkedList } from "./linked-list/LinkedList.js";
const list = new LinkedList();
const chessBoard = [];
const calcAdjacent = (start) => {
  const num1 = start[0];
  const num2 = start[1];
  const adjacentList = [];
  let count = 1;
  while (count !== 9) {
    let a;
    let b;
    if (count < 3) {
      a = num1 - 2;
      b = count % 2 === 0 ? num2 - 1 : num2 + 1;
    } else if (count < 5) {
      a = count % 2 === 0 ? num1 + 1 : num1 - 1;
      b = num2 - 2;
    } else if (count < 7) {
      a = num1 + 2;
      b = count % 2 === 0 ? num2 + 1 : num2 - 1;
    } else {
      a = count % 2 === 0 ? num1 - 1 : num1 + 1;
      b = num2 + 2;
    }
    if (a >= 0 && b >= 0 && a < 8 && b < 8) {
      const adjacentNode = new GraphNode([a, b]);
      if (
        list.containsToString([a, b]) !== false &&
        list.containsToString([a, b]) !== undefined
      ) {
        adjacentList.push(list.containsToString([a, b]));
      } else {
        adjacentList.push(adjacentNode);
        list.append(adjacentNode);
      }
    }
    count++;
  }
  const node = new GraphNode([0, 0], adjacentList);
  list.append(node);
  return adjacentList;
};
const knightMoves = (start, destination) => {
  const startNode = new GraphNode(start, calcAdjacent(start));
  const destinationNode = new GraphNode(destination, calcAdjacent(destination));
};
const adj1 = calcAdjacent([0, 0]);
const node1 = new GraphNode([0, 0], adj1);
const node2 = node1.adjacencyList[0];
node2.adjacencyList = calcAdjacent(node2.data);
console.log(node2.adjacencyList[1].adjacencyList);

export { knightMoves, calcAdjacent };
