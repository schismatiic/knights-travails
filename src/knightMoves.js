import { Node } from "./Node.js";
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
      adjacentList.push([a, b]);
    }
    count++;
  }
  return adjacentList;
};
const knightMoves = (start, destination) => {
  const startNode = new Node(start, calcAdjacent(start));
  const destinationNode = new Node(destination, calcAdjacent(destination));
};

export { knightMoves, calcAdjacent };
