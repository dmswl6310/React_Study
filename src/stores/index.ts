import {createStore,combineReducers} from 'redux';
import * as reducer from './reducers'

const reducers = combineReducers({ ...reducer });

export default createStore(reducers);

export type RootState = ReturnType<typeof reducers>;