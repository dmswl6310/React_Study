import { useState } from "react";
import TicTacToe from "./TicTacToe";

const BeforeGame = () => {
  const [inputNum, setInputNum] = useState(0);
  return inputNum === 0 ? (
    <div>
      빙고길이는?(1~9 사이값을 입력하세요)
      <br />
      <input
        onChange={(e) => {
          setInputNum(Number(e.target.value));
        }}
      ></input>
    </div>
  ) : (
    <TicTacToe size={inputNum} />
  );
};

export default BeforeGame;
