import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../stores";
import { userActions } from "../../stores/actions";

const Board = (props: {
  isGameFinish: boolean;
  setIsGameFinish: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [boardState, setBoardState] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.userState);

  const play = (idx: number) => {
    if (!props.isGameFinish) {
      const tmp = boardState.slice();
      tmp[idx] = user === true ? "O" : "X";
      setBoardState(tmp);
      dispatch(userActions.setUserState(!user));
    }
  };

  const getWinner = (board: string[]) => {
    // 총 8번 체크 가로 3줄 세로 3줄 대각선 2줄
    if (board[0] !== "") {
      if (board[0] === board[1] && board[1] === board[2]) return board[0];
      if (board[0] === board[4] && board[4] === board[8]) return board[0];
      if (board[0] === board[3] && board[3] === board[6]) return board[0];
    }
    if (board[4] !== "") {
      if (board[3] === board[4] && board[4] === board[5]) return board[3];
    }
    if (board[6] !== "") {
      if (board[6] === board[7] && board[7] === board[8]) return board[6];
      if (board[6] === board[4] && board[4] === board[2]) return board[6];
    }
    // 1 4 7
    if (board[1] === "") {
      if (board[1] === board[4] && board[4] === board[7]) return board[1];
    }
    // 2 5 8
    if (board[2] === "") {
      if (board[2] === board[5] && board[5] === board[8]) return board[2];
    }
    return false;
  };

  useEffect(() => {
    const flag = getWinner(boardState);
    let winner = "";
    console.log("승자판정");
    if (flag) {
      props.setIsGameFinish(true);
      winner = flag === "O" ? "O" : "X";
      alert(`승자는 ${winner} 입니다.`);
    }
  }, [boardState]);
  return (
    <BoardTable>
      <BlockRow>
        <Block onClick={() => play(0)}>{boardState[0]}</Block>
        <Block onClick={() => play(1)}>{boardState[1]}</Block>
        <Block onClick={() => play(2)}>{boardState[2]}</Block>
      </BlockRow>
      <BlockRow>
        <Block onClick={() => play(3)}>{boardState[3]}</Block>
        <Block onClick={() => play(4)}>{boardState[4]}</Block>
        <Block onClick={() => play(5)}>{boardState[5]}</Block>
      </BlockRow>
      <BlockRow>
        <Block onClick={() => play(6)}>{boardState[6]}</Block>
        <Block onClick={() => play(7)}>{boardState[7]}</Block>
        <Block onClick={() => play(8)}>{boardState[8]}</Block>
      </BlockRow>
    </BoardTable>
  );
};

export default Board;

const BoardTable = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 5px black;
`;

const BlockRow = styled.div`
  display: flex;
`;
const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
  border: solid 2px white;

  width: 100px;
  height: 100px;
  color: white;
  font-size: 40px;
  font-weight: bold;
`;
