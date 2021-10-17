import { history } from "../actions";

const initState = {
    history: []
};

export default function historyReducers(
    state = initState,
    action: { type: string; payload?: any, error?: boolean }
) {
    switch (action.type) {
        case history.INITIALIZE:
            return initState;
        case history.SET_HISTORY:
            return { ...state, history: action.payload };
        default:
            return state;
    }
};