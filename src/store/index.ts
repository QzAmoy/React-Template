import { combineReducers } from 'redux';
import sysConfigs from './sysConfigs';
import auth from './auth';

const rootReducer = combineReducers({ sysConfigs, auth });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
