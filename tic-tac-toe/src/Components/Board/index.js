import Square from "../Square";

function Board({ state, makeAMove }) {
  //how to use function?

  return (
    <div>
      {state.map((i) => (
        <Square squareCont={i} />
      ))}
    </div>
  );
}

export default Board;
