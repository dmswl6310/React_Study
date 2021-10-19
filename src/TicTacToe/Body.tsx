import Board from "./Board";

const Body = (props: { boardState: any; setBoard: any; size: number }) => {
  return (
    <>
      <Board
        boardState={props.boardState}
        setBoard={props.setBoard}
        size={props.size}
      />
    </>
  );
};

export default Body;
