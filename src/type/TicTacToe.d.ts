type Table = {
    no: number;
    state: number;
};

type HistoryData = {
    data: Table[];
    turn: number;
    gameState: number;
    clickedIdx: number;
}