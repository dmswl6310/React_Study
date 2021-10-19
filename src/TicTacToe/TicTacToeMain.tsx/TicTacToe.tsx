import React, { useState } from "react";
import styled from "styled-components";
import Board from "../Board";

const TicTacToe = () => {
  const [turn, setTurn] = useState<boolean>(Math.random() > 0.5 ? true : false);
  const drawOX = (turn:boolean):string =>{
    return turn?"O":"X"
  }
  return (
    <>
      <h1>Woong TicTacToe :(</h1>
      <MainWrapper>
        <TurnText>{drawOX(turn)+' turn'}</TurnText>
        <Board turn={turn} setTurn={setTurn} drawOX={()=>drawOX(turn)}/>
        <div>bottom</div>
      </MainWrapper>
    </>
  );
};

export default TicTacToe;

const MainWrapper = styled.div`
  background-color: lightgray;
  color: black;
  width: 350px;
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid black;
`;
const TurnText = styled.div`
  text-align: center;
  color: red;
  font-size:2rem;
  padding : 1.5% 0 1.5% 0;
`;