import styled from "styled-components";
import * as actions from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Board = (props: { boardState: any; setBoard: any; size: number }) => {
  const [winner, setWinner] = useState("");
  const dispatch = useDispatch();
  const nextPlayer = useSelector(
    (state: { nextPlayer: string }) => state.nextPlayer
  );
  // useEffect(() => {
  //   const tempBoard = [...props.boardState];
  //   tempBoard[]
  //   props.setBoard(...props.boardState);
  // }, [nextPlayer]);

  const isEnd = (row: number, col: number) => {
    // 세로확인
    for (let r = 0; r <= props.size; r++) {
      if (r === props.size) return true;
      if (props.boardState[r][col] !== nextPlayer && r !== row) break;
    }
    // 가로확인
    for (let c = 0; c <= props.size; c++) {
      if (c === props.size) return true;
      if (props.boardState[row][c] !== nextPlayer && c !== col) break;
    }
    // 대각선확인(↘)
    if (row === col) {
      for (let r = 0; r <= props.size; r++) {
        if (r === props.size) return true;
        if (props.boardState[r][r] !== nextPlayer && r !== row && r !== col)
          break;
      }
    }
    // 대각선확인(↙)
    if (row === props.size - col - 1) {
      for (let r = 0; r <= props.size; r++) {
        if (r === props.size) return true;
        if (
          props.boardState[r][props.size - 1 - r] !== nextPlayer &&
          r !== row &&
          props.size - 1 - r !== col
        )
          break;
      }
    }
    return false;
  };

  const handleClick = (row: number, col: number) => {
    if (props.boardState[row][col] !== "") return;
    if (isEnd(row, col)) setWinner(nextPlayer);
    const front = props.boardState.slice(0, row);
    const back = props.boardState.slice(row + 1, props.size);
    const targetFront = props.boardState[row].slice(0, col);
    const targetBack = props.boardState[row].slice(col + 1, props.size);
    const target = targetFront.concat(nextPlayer, targetBack);

    const newArr = [...front, target, ...back];
    props.setBoard(newArr);
    dispatch(actions.changePlayer());
  };

  const newBoard = props.boardState.map((val: any, row: number) => (
    <Row>
      {val.map((value: any, col: number) => (
        <Data
          onClick={() => handleClick(row, col)}
          className="content"
          size={props.size}
        >
          {value}
        </Data>
      ))}
    </Row>
  ));

  return winner !== "" ? (
    <div>{winner}승리!!</div>
  ) : (
    <TableContainer>
      <Table>{newBoard}</Table>
    </TableContainer>
  );
};

export default Board;

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center
  width: 500px;
`;
const Table = styled.table`
  width: 90%;
  border: 1px solid #444444;
  border-collapse: collapse;
`;
const Row = styled.tr``;
const Data = styled.td<{ size: number }>`
  border: 1px solid #444444;
  width: ${(props) => 100 / props.size}%;
  position: relative;
  text-align: center;

  &:after {
    content: "";
    display: block;
    margin-top: 100%;
  }
  $:content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: gold;
  }
`;
