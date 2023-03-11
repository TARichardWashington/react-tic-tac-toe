import { useState } from "react";

function Square({ value, onSquareCLick }) {
  return <button className="square" onClick={onSquareCLick}>{value}</button>;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = 'x';
    setSquares(nextSquares);
  }

  return <>
    <div className="board-row">
      <Square value={squares[0]} onSquareCLick={handleClick} />
      <Square value={squares[1]} onSquareCLick={handleClick} />
      <Square value={squares[2]} onSquareCLick={handleClick} />
    </div>

    <div className="board-row">
      <Square value={squares[3]} onSquareCLick={handleClick} />
      <Square value={squares[4]} onSquareCLick={handleClick} />
      <Square value={squares[5]} onSquareCLick={handleClick} />
    </div>

    <div className="board-row">
      <Square value={squares[6]} onSquareCLick={handleClick} />
      <Square value={squares[7]} onSquareCLick={handleClick} />
      <Square value={squares[8]} onSquareCLick={handleClick} />
    </div>
  </>;
}
