import { useState } from "react";
import styled from "styled-components";

const Board = (props: { turn: boolean; setTurn: any; drawOX: any }) => {
  const { turn, setTurn, drawOX } = props;
  const [box, setBox] = useState<tictactoetype>(
    new Array(9).fill({ player: "　", use: false })
  );

    const onClick = (idx:number) =>{
        let nextBox: {
            player: string;
            use: boolean;
          }[] = [];
        const tempbox = box.slice();
        if(!box[idx].use){
            let i=0;

            while(i<9){
                let boxItem ={
                    player:'',
                    use:false
                };
                if(idx===i){
                    boxItem.player =  drawOX(turn)
                    boxItem.use = !tempbox[idx].use
                }else{
                    boxItem = tempbox[i]
                }
                nextBox=[...nextBox, boxItem]
                i++;
            }
            setTurn(!turn)
            setBox(nextBox);
        }
        
    }
  return (
    <BoardWrapper>
      {box.map((item, idx) => (
        <BoxWrapper key = {idx} onClick={()=>onClick(idx)}>{item.player}</BoxWrapper>
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
