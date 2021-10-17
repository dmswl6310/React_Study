export const history = {
    INITIALIZE: 'history/INITIALIZE',
    SET_HISTORY: 'history/SET_HISTORY'
};

export const hisotryActions = {
    initialize: () => ({ type: history.INITIALIZE }),
    setHistory: (historyData: HistoryData[]) => ({ type: history.SET_HISTORY, payload: historyData })
};