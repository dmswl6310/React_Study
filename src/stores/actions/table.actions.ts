export const table = {
    INITIALIZE: 'table/INITIATE',
    GET_STATE: 'table/GET_STATE',
    SET_TABLE_DATA: 'table/SET_TABLE_DATA',
    SET_GAME_STATE: 'table/SET_GAME_STATE',
    SET_TURN: 'table/SET_TURN',
    SET_HISTORY: 'table/SET_HISTORY'
};

export const tableActions = {
    initialize: () => ({ type: table.INITIALIZE }),
    getGameState: () => ({ type: table.GET_STATE }),
    setTableData: (tableData: Table[]) => ({ type: table.SET_TABLE_DATA, payload: tableData }),
    setGameState: (gameState: number) => ({ type: table.SET_GAME_STATE, payload: gameState }),
    setTurn: (turn: number) => ({ type: table.SET_TURN, payload: turn }),
    setHistory: (historyData: HistoryData) => ({ type: table.SET_HISTORY, payload: historyData })
}