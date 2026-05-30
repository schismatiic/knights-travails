import { GraphNode } from "./GraphNode.js";
import { LinkedList } from "./linked-list/LinkedList.js";
const list = new LinkedList();
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
  let final;
  let moves = [];
  // ============== BFS
  let queue = [];
  queue.push(startNode);
  while (queue.length !== 0) {
    const current = queue[0];
    let tmp = queue.slice(1);
    queue = tmp;
    current.adjacencyList = calcAdjacent(current.data);
    for (let index = 0; index < current.adjacencyList.length; index++) {
      queue.push(current.adjacencyList[index]);
      if (current.adjacencyList[index].previous === null) {
        current.adjacencyList[index].previous = current;
      }
    }
    if (current.data.toString() === destination.toString()) {
      final = current;
      break;
    }
  }
  // ============== Fill moves
  let tmp = final;
  moves.push(tmp.data);
  while (tmp.previous !== null) {
    tmp = tmp.previous;
    moves.push(tmp.data);
  }
  // ============== Print
  console.log(`You made it in ${moves.length - 1} moves!  Here's your path: `);
  for (let index = moves.length - 1; index >= 0; index--) {
    console.log(moves[index]);
  }
};

knightMoves([0, 7], [7, 0]);
