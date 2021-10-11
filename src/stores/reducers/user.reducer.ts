import { user } from '../actions/user.action'

// initial state
const initialState = {
    userState: true,
};

// reducers 
export default function userReducers(
    state = initialState,
    action: { type: string; payload?: any; error?: boolean }
) {
    switch (action.type) {
        case user.INITIALIZE:
            return initialState;
        case user.GET_USER_STATE:
            return state;
        case user.SET_USER_STATE:
            return { ...state, userState: action.payload }
        default:
            return state;
    }
}