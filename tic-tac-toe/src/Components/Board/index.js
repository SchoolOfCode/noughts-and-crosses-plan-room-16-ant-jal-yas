import Square from "../Square";
import css from "./index.module.css";

function Board({ board, onClick, turn }) {
  //how to use function?

  return (
    <div className={css.gridContainer}>
      {board.map((item, ind) => (
        <Square text={item} key={ind} value={ind} onClick={onClick} turn={turn}/>
      ))}
    </div>
  );
}

export default Board;
