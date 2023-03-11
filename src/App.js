import { useState } from "react";

function Square({ value, onSquareCLick }) {
  return <button className="square" onClick={onSquareCLick}>{value}</button>;
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWiner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'x';
    } else {
      nextSquares[i] = 'o';
    }
    setSquares(nextSquares);

    setXIsNext(!xIsNext);
  }

  return <>
    <div className="board-row">
      <Square value={squares[0]} onSquareCLick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareCLick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareCLick={() => handleClick(2)} />
    </div>

    <div className="board-row">
      <Square value={squares[3]} onSquareCLick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareCLick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareCLick={() => handleClick(5)} />
    </div>

    <div className="board-row">
      <Square value={squares[6]} onSquareCLick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareCLick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareCLick={() => handleClick(8)} />
    </div>
  </>;
}

function calculateWiner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
