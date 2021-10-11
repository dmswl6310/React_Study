import {createStore} from 'redux';

// /* 리덕스에서 관리 할 상태 정의 */
// const initialState={
//     nextPlayer:'O'
// }

// /* 액션 타입 정의 */
// const CHANGE_PLAYER='CHANGE_PLAYER';

// /* 액션 생성함수 정의 */
// function changePlayer=()=>({
//     type:CHANGE_PLAYER,
// });

// /* 리듀서 만들기 */
// function reducer(state=initialState,action: { type: any;}){
//     switch(action.type){
//         case CHANGE_PLAYER:
//             return{
//                 ...state,
//                 player:action.player
//             }
//         default:
//             return state;
//     }
// }
// const store=createStore(reducer);