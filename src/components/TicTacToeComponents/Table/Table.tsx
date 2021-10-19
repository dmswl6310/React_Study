import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../stores";
import { hisotryActions, tableActions } from "../../../stores/actions";
import { indexToXY } from "../../../utils/converter.utils";
import Tile from "../Tile/Tile";

const Table = () => {
    const dispatch = useDispatch();

    const gameState = useSelector((state: RootState) => state.table.gameState);
    const turn = useSelector((state: RootState) => state.table.turn);
    const table: Table[] = useSelector((state: RootState) => state.table.data);
    const history: HistoryData[] = useSelector((state: RootState) => state.history.history);

    const onClick = (index: number) => {
        if (gameState !== 2) {
            return;
        }

        if (turn !== 9 && table[index].state === 2) {
            const newData = { no: index, state: turn % 2, highlight: false };
            const newTableData: Table[] = table.map((data, idx) =>
                idx === index ? newData : data
            );
            const newGameState = checkGameOver(newTableData, index);
            const newTurn = turn + 1;

            dispatch(tableActions.setTurn(newTurn));
            dispatch(tableActions.setTableData(newTableData));
            dispatch(tableActions.setGameState(newGameState));

            console.log(history);

            const historyData: HistoryData = { data: newTableData, turn: newTurn, gameState: newGameState, clickedIdx: index };
            const newHistory = history.concat(historyData);

            console.log(newHistory);

            dispatch(hisotryActions.setHistory(newHistory));
        }
    };

    const checkGameOver = (newTableData: Table[], index: number): number => {
        const { x, y } = indexToXY(index);

        const nowState = newTableData[index].state;
        // 가로
        if (newTableData[x * 3].state === nowState
            && newTableData[x * 3 + 1].state === nowState
            && newTableData[x * 3 + 2].state === nowState) {
                newTableData[x * 3].highlight = true;
                newTableData[x * 3 + 1].highlight = true;
                newTableData[x * 3 + 2].highlight = true;
                return nowState;
        }

        // 세로
        if (newTableData[0 + y].state === nowState
            && newTableData[3 + y].state === nowState
            && newTableData[6 + y].state === nowState) {
                newTableData[0 + y].highlight = true;
                newTableData[3 + y].highlight = true;
                newTableData[6 + y].highlight = true;
            return nowState;
        }

        // 대각선 X
        if (x % 2 !== 0 || y % 2 !== 0) {
            return 2;
        }

        // 대각선
        if (newTableData[0].state === nowState
            && newTableData[4].state === nowState
            && newTableData[8].state === nowState) {
                newTableData[0].highlight = true;
                newTableData[4].highlight = true;
                newTableData[8].highlight = true;
            return nowState;
        } else if (newTableData[2].state === nowState
            && newTableData[4].state === nowState
            && newTableData[6].state === nowState) {
                newTableData[2].highlight = true;
                newTableData[4].highlight = true;
                newTableData[6].highlight = true;
            return nowState;
        }

        return 2;
    }

    return (
        <OutLine>
            <Row >
                <Tile data={table[0]} onClick={() => onClick(0)} />
                <Tile data={table[1]} onClick={() => onClick(1)} />
                <Tile data={table[2]} onClick={() => onClick(2)} />
            </Row>
            <Row >
                <Tile data={table[3]} onClick={() => onClick(3)} />
                <Tile data={table[4]} onClick={() => onClick(4)} />
                <Tile data={table[5]} onClick={() => onClick(5)} />
            </Row>
            <Row >
                <Tile data={table[6]} onClick={() => onClick(6)} />
                <Tile data={table[7]} onClick={() => onClick(7)} />
                <Tile data={table[8]} onClick={() => onClick(8)} />
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
`;