import { useState } from "react";
import Board from "../Board";
import css from "./index.module.css";

export default function Game() {
  const [board, updateBoard] = useState(Array(9).fill(null));

  function getWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  const winner = getWinner(board);

  const [turn, setTurn] = useState("X");

  function makeAMove(playerMove, key) {
    if (winner) {
      alert(`${playerMove} wins`);
      return;
    }
    const updatedArray = [
      ...board.slice(0, key),
      playerMove,
      ...board.slice(key + 1),
    ];
    if (board[key] !== null) {
      alert("Im not empty!");
      return;
    }
    updateBoard(updatedArray);

    if (turn === "X") {
      setTurn("O");
    } else {
      setTurn("X");
    }
  }

  return (
    <div className={css.container}>
      <Board board={board} onClick={makeAMove} upd={updateBoard} turn={turn} />
    </div>
  );
}
