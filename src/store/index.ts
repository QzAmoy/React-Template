import { combineReducers } from 'redux';
import lang from './lang';

const rootReducer = combineReducers({ lang });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
