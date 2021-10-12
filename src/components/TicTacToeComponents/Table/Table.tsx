import styled from "styled-components";
import Tile from "../Tile/Tile";

const Table = (props: {
  table: TileState[],
  setTableData: any,
  turn: number,
  setTurn: any,
  gameState: number,
  setGameState: any
}) => {
    const { table, turn, gameState } = props;

    const onClick = (index: number) => {
        if(gameState !== 2) {
            return;
        }

        if(turn !== 9 && table[index].state === 2) {
            const newTableData: TileState[] = table.map((data, idx) => 
                idx === index ? {no: data.no, state: turn % 2} : data
            );
            props.setTurn(turn + 1);
            props.setTableData(newTableData);

            props.setGameState(checkGameOver(newTableData, index));
        }
    };

    const checkGameOver = (newTableData: TileState[], index: number): number => {
        let x = Math.floor(index / 3);
        let y = index % 3;

        const nowState = newTableData[index].state;
        // 가로
        if(newTableData[x * 3].state === nowState
             && newTableData[x * 3 + 1].state === nowState
              && newTableData[x * 3 + 2].state === nowState) {
                return nowState;
        }

        // 세로
        if(newTableData[0 + y].state === nowState
            && newTableData[3 + y].state === nowState
             && newTableData[6 + y].state === nowState) {
               return nowState;
        }

        // 대각선 X
        if(x % 2 !== 0 || y % 2 !== 0) {
            return 2;
        }

        // 대각선
        if(newTableData[0].state === nowState
            && newTableData[4].state === nowState
             && newTableData[8].state === nowState) {
            return nowState;
        } else if(newTableData[2].state === nowState
            && newTableData[4].state === nowState
             && newTableData[6].state === nowState) {
            return nowState;
        }

        return 2;
    }

    return (
        <OutLine>
            <Row >
                <Tile data={table[0]} onClick={() => onClick(0)}/>
                <Tile data={table[1]} onClick={() => onClick(1)}/>
                <Tile data={table[2]} onClick={() => onClick(2)}/>
            </Row>
            <Row >
                <Tile data={table[3]} onClick={() => onClick(3)}/>
                <Tile data={table[4]} onClick={() => onClick(4)}/>
                <Tile data={table[5]} onClick={() => onClick(5)}/>
            </Row>
            <Row >
                <Tile data={table[6]} onClick={() => onClick(6)}/>
                <Tile data={table[7]} onClick={() => onClick(7)}/>
                <Tile data={table[8]} onClick={() => onClick(8)}/>
            </Row>
        </OutLine>
    );
};

export default Table;

const OutLine = styled.div`
    display:inline-block;
    border: 1px solid;
    padding: 5px;
    background-color: orange;
`;

const Row = styled.div`
    display: flex;
    flex-Direction: row;
    height:auto;
    width:auto;
    background-color: black;
`;