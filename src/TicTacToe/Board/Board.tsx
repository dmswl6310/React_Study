import { useState } from "react";
import styled from "styled-components";

const Board = (props: { turn: boolean; setTurn: any; drawOX: any }) => {
  const { turn, setTurn, drawOX } = props;
  const [end, setEnd] = useState<boolean>(true);
  const [box, setBox] = useState<tictactoetype>(
    new Array(9).fill({ player: "　", use: false })
  );

  const onClick = (idx: number) => {
    let nextBox: {
      player: string;
      use: boolean;
    }[] = [];
    const tempbox = box.slice();
    if (end) {
      if (!box[idx].use) {
        let i = 0;

        while (i < 9) {
          let boxItem = {
            player: "",
            use: false,
          };
          if (idx === i) {
            boxItem.player = drawOX(turn);
            boxItem.use = !tempbox[idx].use;
          } else {
            boxItem = tempbox[i];
          }
          nextBox = [...nextBox, boxItem];
          i++;
        }
        setTurn(!turn);
        setBox(nextBox);

        checkWin(nextBox);
      } else {
        alert("이미 채워져있습니다. 다른 곳에 놓아주세요.");
      }
    }
  };
  const checkWin = (box: tictactoetype) => {
    let i = 0;
    let t = 0;
    while (i < 9) {
      if (i === 0 || i === 3 || i === 6) {
        t = 1;
        if (
          box[i].player !== "　" &&
          box[i + t].player !== "　" &&
          box[i + t + t].player !== "　" &&
          box[i].player === box[i + t].player &&
          box[i].player === box[i + t + t].player
        ) {
          alert(box[i].player + " Win !!!");
          setTurn(turn);
          setEnd(false);
        }
      }
      if (i === 2) {
        t = 2;
        if (
          box[i].player !== "　" &&
          box[i + t].player !== "　" &&
          box[i + t + t].player !== "　" &&
          box[i].player === box[i + t].player &&
          box[i].player === box[i + t + t].player
        ) {
          alert(box[i].player + " Win !!!");
          setTurn(turn);
          setEnd(false);
        }
      }
      if (i === 0 || i === 1 || i === 2) {
        t = 3;
        if (
          box[i].player !== "　" &&
          box[i + t].player !== "　" &&
          box[i + t + t].player !== "　" &&
          box[i].player === box[i + t].player &&
          box[i].player === box[i + t + t].player
        ) {
          alert(box[i].player + " Win !!!");
          setTurn(turn);
          setEnd(false);
        }
      }
      if (i === 0) {
        t = 4;
        if (
          box[i].player !== "　" &&
          box[i + t].player !== "　" &&
          box[i + t + t].player !== "　" &&
          box[i].player === box[i + t].player &&
          box[i].player === box[i + t + t].player
        ) {
          alert(box[i].player + " Win !!!");
          setTurn(turn);
          setEnd(false);
        }
      }
      i++;
    }
  };
  return (
    <BoardWrapper>
      {box.map((item, idx) => (
        <BoxWrapper key={idx} onClick={() => onClick(idx)}>
          {item.player}
        </BoxWrapper>
      ))}
    </BoardWrapper>
  );
};

export default Board;

const BoardWrapper = styled.div`
  background-color: red;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const BoxWrapper = styled.div`
  background-color: darkgray;
  font-size: 1.7rem;
  margin: 0.666%;
  border-radius: 0.3rem;
  width: 32%;
  text-align: center;
  padding: 7% 0 7% 0;
`;
