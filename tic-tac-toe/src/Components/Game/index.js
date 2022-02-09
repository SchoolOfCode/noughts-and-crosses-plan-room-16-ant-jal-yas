import { useEffect, useState } from "react";
import Board from "../Board";

export default function Game() {
  const [board, updateBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("x");

  useEffect(() => {}, [Board]);

  function makeAMove(playerMove, key) {
    const updatedArray = [
      ...board.slice(0, key),
      playerMove,
      ...board.slice(key + 1),
    ];
    if(board[key] !== null){
      alert("Im not empty!")
      return
    }
    updateBoard(updatedArray);

    if (turn === "x") {
      setTurn("o");
    } else {
      setTurn("x");
    }
  }

  return (
    <div>
      <Board board={board} onClick={makeAMove} turn={turn} />
    </div>
  );
}
