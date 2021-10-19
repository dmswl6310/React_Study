import { table } from "../actions";

const initState = {
  data: [
    {
      no: 0,
      state: 2,
      highlight: false,
    },
    {
      no: 1,
      state: 2,
      highlight: false,
    },
    {
      no: 2,
      state: 2,
      highlight: false,
    },
    {
      no: 3,
      state: 2,
      highlight: false,
    },
    {
      no: 4,
      state: 2,
      highlight: false,
    },
    {
      no: 5,
      state: 2,
      highlight: false,
    },
    {
      no: 6,
      state: 2,
      highlight: false,
    },
    {
      no: 7,
      state: 2,
      highlight: false,
    },
    {
      no: 8,
      state: 2,
      highlight: false,
    },
  ],
  gameState: 2,
  turn: 0,
};

export default function tableReducers(
  state = initState,
  action: { type: string; payload?: any; error?: boolean }
) {
  switch (action.type) {
    case table.INITIALIZE:
      return initState;
    case table.GET_STATE:
      return state;
    case table.SET_TABLE_DATA:
      return { ...state, data: action.payload };
    case table.SET_TURN:
      return { ...state, turn: action.payload };
    case table.SET_GAME_STATE:
      return { ...state, gameState: action.payload };
    case table.SET_HISTORY:
      return {
        ...state,
        data: action.payload.data,
        turn: action.payload.turn,
        gameState: action.payload.gameState,
      };
    default:
      return state;
  }
}
