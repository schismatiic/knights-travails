# Knight's Travails

A JavaScript implementation of the classic **Knight's Travails** problem, using **Breadth-First Search (BFS)** to find the shortest path a knight can take between two positions on a standard 8×8 chessboard.

This project explores graph traversal, shortest-path algorithms, and problem-solving with implicit graph structures.

---

## Features

- Finds the shortest path between any two squares on a chessboard
- Uses Breadth-First Search (BFS)
- Represents the chessboard as an implicit graph
- Prevents moves outside the board boundaries
- Returns the complete path from start to destination
- Runs entirely in the command line using Node.js

---

## Concepts Covered

- Graph Traversal
- Breadth-First Search (BFS)
- Queues
- Shortest Path Algorithms
- Coordinate Systems
- Chess Movement Logic

---

## Project Structure

```text
/project-root
│── knightMoves.js
└── README.md
```

---

## Problem Description

A knight moves in an L-shape:

- Two squares in one direction and one square perpendicular
- One square in one direction and two squares perpendicular

The goal is to determine the minimum number of moves required to travel from one position to another and return the full path taken.

---

## Example Usage

```javascript
knightMoves([0, 0], [1, 2]);
```

Output:

```text
You made it in 1 moves! Here's your path:
[0, 0]
[1, 2]
```

---

### Another Example

```javascript
knightMoves([0, 0], [3, 3]);
```

Possible Output:

```text
You made it in 2 moves! Here's your path:
[0, 0]
[2, 1]
[3, 3]
```

Since multiple shortest paths may exist, different valid outputs are possible.

---

## Running the Project

Run the script using Node.js:

```bash
node knightMoves.js
```

---

## Algorithm

The solution uses **Breadth-First Search (BFS)** because BFS guarantees the shortest path in an unweighted graph.

The algorithm:

1. Starts from the initial position.
2. Generates all valid knight moves.
3. Tracks visited positions to avoid repetition.
4. Explores positions level by level using a queue.
5. Stops when the destination is reached.
6. Reconstructs and returns the shortest path.

---

## License

This project is open-source.
