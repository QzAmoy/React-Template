import { combineReducers } from 'redux';
import sysConfigs from './sysConfigs';

const rootReducer = combineReducers({ sysConfigs });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
