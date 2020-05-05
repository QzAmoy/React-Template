import { combineReducers } from 'redux';
import langConfig from './langConfig';

const rootReducer = combineReducers({ langConfig });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
