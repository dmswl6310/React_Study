import Board from "./Board";

const Body = (props: { boardState: any; setBoard: any }) => {
  return (
    <>
      <Board boardState={boardState} setBoard={setBoard} />
    </>
  );
};

export default Body;
