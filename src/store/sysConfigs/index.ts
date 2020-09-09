import produce from 'immer';
import {
  SysConfigState,
  Langs,
  SET_LANG,
  SET_COLLAPSED,
  SET_SELECTED_KEYS,
  SET_OPEN_KEYS,
  SET_CURRENT_OPEN_KEYS,
  SysConfigActionTypes,
  SET_LOAD_STATUS,
} from './types';

const initialState:SysConfigState = {
  lang: Langs.ZH,
  collapsed: false,
  selectedKeys: [],
  openKeys: [],
  currentOpenKeys: [],
  isReload: true,
};
const sysConfigs = (
  state = initialState,
  action: SysConfigActionTypes
): SysConfigState => {
  switch (action.type) {
    case SET_LANG:
      return produce(state, (draft) => {
        draft.lang = action.lang;
      });
    case SET_COLLAPSED:
      return produce(state, (draft) => {
        draft.collapsed = action.collapsed;
      });
    case SET_OPEN_KEYS:
      return produce(state, (draft) => {
        draft.openKeys = action.openKeys;
      });
    case SET_CURRENT_OPEN_KEYS:
      return produce(state, (draft) => {
        draft.currentOpenKeys = action.currentOpenKeys;
      });
    case SET_SELECTED_KEYS:
      return produce(state, (draft) => {
        draft.selectedKeys = action.selectedKeys;
      });
    case SET_LOAD_STATUS:
      return produce(state, (draft) => {
        draft.isReload = action.isReload;
      });
    default:
      return state;
  }
};
export default sysConfigs;
