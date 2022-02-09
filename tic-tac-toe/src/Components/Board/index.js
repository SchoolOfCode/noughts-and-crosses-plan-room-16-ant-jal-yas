import Square from "../Square";
import css from "./index.module.css";

function Board({ board, makeAMove }) {
  //how to use function?

  return (
    <div className={css.gridContainer}>
      {board.map((item, ind) => (
        <Square text={item} key={ind} value={ind} />
      ))}
    </div>
  );
}

export default Board;
