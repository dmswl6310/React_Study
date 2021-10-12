import * as types from '../actions/ActionTypes'

/* 리덕스에서 관리 할 상태 정의 */
export const initialState={
    nextPlayer:'O'
}


/* 리듀서 만들기 */
function reducer(state=initialState,action: { type: any; }){
    switch(action.type){
        case types.CHANGE_PLAYER:
            return{
                ...state,
               nextPlayer: (state.nextPlayer==='O'? "X" : "O")
            }
        default:
            return state;
    }
}
export default reducer;