import {user} from '../actions';

const initialState = {
    userState:true,
}

export default function userReducers (
    state = initialState,
    action: {type:string; payload?:any; error?:boolean}
) {
    switch(action.type){
        case user.SET_USER:
            return {...state, userState:action.payload}
        default:
            return state;

    }
}