import Square from "../Square";

function Board({ state, makeAMove }) {
  //how to use function?

  return (
    <div>
      {state.map((i, ind) => (
        <Square squareCont={i} key={ind} />
      ))}
    </div>
  );
}

export default Board;
