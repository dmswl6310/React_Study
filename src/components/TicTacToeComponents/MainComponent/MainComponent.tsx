import { useState } from "react";
import { History } from "../History";
import { Table } from "../Table";

const initTileState: TileState[] = [
    {
        no: 0,
        state: 2,
    },
    {
        no: 1,
        state: 2,
    },
    {
        no: 2,
        state: 2,
    },
    {
        no: 3,
        state: 2,
    },
    {
        no: 4,
        state: 2,
    },
    {
        no: 5,
        state: 2,
    },
    {
        no: 6,
        state: 2,
    },
    {
        no: 7,
        state: 2,
    },
    {
        no: 8,
        state: 2,
    },
];

const MainComponent = () => {
    const [tableData, setTableData] = useState<TileState[]>(initTileState);
    const [gameState, setGameState] = useState<number>(2);
    const [turn, setTurn] = useState<number>(0);
    const [history, setHistory] = useState<TileState[]>([]);

    const reset = () => {
        setTableData(initTileState);
        setGameState(2);
        setTurn(0);
    }

    const result = () => {
        if(gameState === 2) {
            return (
                turn === 9 ? 'Draw!' : ''
            );
        } else {
            return (
                `Player ${gameState + 1} Win!`
            );
        }
    }

    return (
        <div>
            <h1>React Tic Tac Toe - with Hooks</h1>
            <Table
              table={tableData}
              setTableData={setTableData}
              turn={turn}
              setTurn={setTurn}
              gameState={gameState}
              setGameState={setGameState}
            />
            <div>
                {<button type="button" onClick={reset}>Reset</button>}
                <h1>{result()}</h1>

                <History/>
            </div>
        </div>
    );
};

export default MainComponent;